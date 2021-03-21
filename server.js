const express = require('express');
const grab = require('node-fetch');
const flood = require('./module');
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const app = express();

let averageTimes = [48.3];

const getAverage = () => {
    let sum = 0;
    for (let averageIndex in averageTimes.slice(Math.max(averageTimes.length - 10, 0)))
        sum += averageTimes[averageIndex];

    return sum / averageTimes.length;
}

let ratelimits = {}

grab('http://checkip.amazonaws.com/')
    .then(res => res.text())
    .then(body => console.log(`Your public IP is ${body}`));

app.use('/assets', express.static(`${__dirname}/assets`))
app.get('/flood', async(req, resp) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const startTime = new Date();
    let email = req.query.e;
    // console.log(`${email} was requested by ${ip}`);
    if (!email || email == '') return resp.send(
        JSON.stringify({
            error: true,
            errorMsg: "Invalid Email"
        })
    )

    const matches = email.match(emailRegex);
    if (!matches) return resp.send(
        JSON.stringify({
            error: true,
            errorMsg: "Invalid Email"
        })
    )

    email = matches[0];

    const minutes = 20;
    let ratelimit = ratelimits[ip];
    if (ratelimit) {
        ratelimit = (ratelimit + (1000 * 60 * minutes)) - Date.now();
        if (Math.abs(ratelimit) == ratelimit) {
            if (ratelimit / 1000 / 60 < minutes) {
                let tryAgainStr = `Try again in `;
                if (ratelimit / 1000 / 60 < 1) tryAgainStr += `${Math.round(ratelimit / 1000)} seconds`;
                else {
                    let minutesleft = Math.round(ratelimit / 1000 / 60);
                    tryAgainStr += `${minutesleft + 1} minute${minutesleft !== 1 ? 's' : ''}`;
                }

                return resp.send(
                    JSON.stringify({
                        error: true,
                        errorMsg: `<b>You've flooded too recently</b>!<br>${tryAgainStr}`
                    })
                )
            }
        }
    }

    // consola.warn(`FLOOD! ${email} by ${ip}`);

    ratelimits[ip] = Date.now();
    await flood(email);

    const timing = Math.round((Date.now() - startTime.getTime()) / 100) / 10;
    averageTimes.push(timing);

    resp.send(
        JSON.stringify({
            success: true,
            time: timing
        })
    );
})

app.get('/speed', (req, resp) => {
    resp.send(JSON.stringify({
        avg: Math.round(getAverage())
    }));
})

app.get('/*', (req, resp) => {
    resp.sendFile(`${__dirname}/index.html`);
})

app.listen(80);
const express = require('express');
const path = require('path');
const fs = require('fs');
const colors = require('colors');
const grab = require('node-fetch');
const consola = require('consola');
const flood = require('./module');
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const app = express();

let averageTimes = [48.3, 30, 30, 30, 30, 30, 30, 30, 30, 40, 40];

const average = array => {
    let sum = 0;
    array = array.slice(Math.max(array.length - 10, 0))
    for (let averageIndex in array)
        sum += array[averageIndex];

    return sum / array.length;
}

const getAverage = () => average(averageTimes);

let ratelimits = {}

const getPublicIP = async () => {
    let resp = await grab('http://checkip.amazonaws.com/')
    resp = await resp.text();
    return resp;
}

app.use('/assets', express.static(path.join(__dirname, `/assets`)));

const smsGateways = {
    "USA": [
        "sms.alltelwireless.com",   // Alltel
        "txt.att.net",              // AT&T
        "sms.myboostmobile.com",    // Boost Mobile
        "mms.cricketwireless.net",  // Cricket Wireless
        "msg.fi.google.com",        // Google FI
        "mymetropcs.com",           // MetroPCS
        "text.republicwireless.com",// Republic Wireless
        "messaging.sprintpcs.com",  // Sprint
        "tmomail.net",              // T-Mobile
        "email.uscc.net",           // U.S. Cellular
        "vtext.com",                // Verizon Wireless
        "vmobl.com"                 // Virgin Mobile
    ],
    "Canada": [
        "txt.bell.ca",              // Bell Canada
        "text.mts.net",             // Bell MTS
        "fido.ca",                  // Fido Solutions
        "txt.freedommobile.ca",     // Freedom Mobile
        "msg.telus.com",            // Koodo Mobile
        "mobiletxt.ca",             // PC Mobile
        "pcs.rogers.com",           // Rogers Comms.
        "sms.sasktel.com",          // SaskTel
        "msg.telus.com"             // Telus
    ],
    /*"Germany": [
        "",
        "",
        "voicestream.net",          // Vodafone
        "o2.co.uk"                  // O2
    ]*/
}

app.get('/flood', async (req, resp) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const startTime = new Date();
    let email = req.query.e;
    if (!email || email === '') return resp.send(
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

    let minutes = 5;

    minutes--;
    let ratelimit = ratelimits[ip];
    if (ratelimit) {
        ratelimit = (ratelimit + (1000 * 60 * (minutes))) - Date.now();
        if (Math.abs(ratelimit) === ratelimit) {
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
    ratelimits[ip] = Date.now();
    let formAmount = await flood(email);

    const timing = Math.round((Date.now() - startTime.getTime()) / 100) / 10;
    averageTimes.push(timing);

    resp.send(
        JSON.stringify({
            success: true,
            time: timing,
            forms: formAmount
        })
    );
})

app.get('/speed', (req, resp) => {
    resp.send(JSON.stringify({
        avg: Math.round(getAverage()),
    }));
})

app.get('/', (req, resp) => {
    resp.sendFile(path.join(__dirname, '/index.html'));
})

app.get('*', (req, resp) => {
    resp.redirect('/');
})

app.listen(80);

getPublicIP().then(ip => console.log(`Your public IP is ${ip}`));

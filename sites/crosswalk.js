const fetch = require('node-fetch');

module.exports = {
    name: "Crosswalk",
    url: "https://www.crosswalk.com/newsletters/",
    signup: (async (_email, encodedEmail) => {
        await fetch("https://allpass.salemwebnetwork.com/newsletters/fullsubmission?&emailAddress=" +
            encodedEmail + "&firstName=&lastName=&newsletters=4355%2C9944%2C8033%2C4273%2C10779%2C8172%2C10275%2C10117%2C8398%2C4269%2C7132%2C4263%2C6913%2C5132%2C8247%2C5043%2C4299%2C5063%2C8244%2C4374%2C11055%2C4664%2C5163%2C5047%2C5051%2C5166%2C5165%2C5167%2C4576%2C4297%2C4320%2C4285%2C4865%2C6972%2C4653%2C8787%2C5055%2C4283%2C4317%2C5168%2C4377%2C8183%2C4929%2C4759%2C4798%2C9365%2C4787%2C7512%2C4311%2C4395%2C4396%2C4549%2C4702%2C4590%2C5039%2C4708%2C5035%2C4808%2C4272%2C4289%2C8455%2C9014%2C8978%2C8630%2C8579%2C4288%2C4917%2C5160%2C4630%2C10356%2C4281%2C8132%2C10687%2C9913%2C10643%2C7065%2C7326%2C8063%2C8034%2C5027%2C7473%2C8070%2C4582%2C6762%2C9959%2C4392%2C5031%2C7469%2C4750%2C4779%2C8309%2C4601%2C5012%2C4541%2C6782%2C4906%2C4724%2C4537%2C4682%2C4545%2C10230%2C4900%2C4719%2C4712%2C4742%2C8235%2C4405%2C8249%2C5974%2C4642%2C4622%2C4516%2C8212%2C4376%2C4771%2C4398%2C4402%2C4399%2C5117%2C4394%2C4279%2C4913%2C4397%2C5128%2C8446%2C4303%2C8255%2C4605%2C8059%2C4290%2C4404%2C8239%2C4275%2C4557%2C4362%2C4564%2C8123%2C8075%2C4287%2C4885%2C8179%2C4597%2C4738%2C8175%2C8165%2C4291%2C8464&signupLocation=Newsletter%20Page&signupDomain=www.crosswalk.com&signupUrl=%2Fnewsletters%2F&signupPage=2&screen=1360&callback=jQuery111006821587697244988_1616090897561&_=1616090897562", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "script",
                "sec-fetch-mode": "no-cors",
                "sec-fetch-site": "cross-site"
            },
            "referrer": "https://www.crosswalk.com/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors"
        })
        return true;
    })
}
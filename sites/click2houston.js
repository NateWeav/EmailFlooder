const fetch = require('node-fetch');

module.exports = {
    name: "Click2Houston",
    url: "https://www.click2houston.com/account/newsletters/",
    signup: (async (email, _encodedEmail) => {
        // REGISTER EMAIL
        await fetch("https://api.clickondetroit.com/sailthru/sailthru/subscriptions/kprc/" + email, {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "en-US,en;q=0.9",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site"
            },
            "referrer": "https://www.click2houston.com/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors"
        });

        const time = Date.now();
        await fetch("https://api.click2houston.com/sailthru/sailthru/updatelists/new", {
            "headers": {
                "accept": "application/json, text/plain, */*",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json;charset=UTF-8",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-site"
            },
            "referrer": "https://www.click2houston.com/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"site\":\"kprc\",\"subscribes\":{\"acquisition_method\":\"sailthru_subscription_page\",\"acquisition_time\":" + time + ",\"subscriptionformvisit_time\":" + time + ",\"subscription_count\":0,\"stVar\":null,\"kprc_breaking\":1,\"kprc_weatherDaily\":1,\"kprc_frank\":1,\"kprc_contests\":1,\"kprc_0700cst\":1,\"kprc_1200cst\":1,\"kprc_2000cst\":1,\"kprc_somethinggood\":1,\"kprc_entertainment\":1,\"kprc_houstonlife\":1,\"kprc_thingstodo\":1,\"kprc_crime\":1,\"kprc_texans\":1,\"kprc_askamy\":1,\"kprc_investigates\":1,\"kprc_astros\":1,\"kprc_houstonsportsdaily\":1,\"kprc_realestate\":1,\"kprc_rodeo\":1,\"kprc_supportlocal\":1,\"kprc_wine\":1,\"kprc_education\":1,\"kprc_health\":1,\"kprc_corona\":1,\"kprc_elections\":1,\"kprc_traffic\":1},\"email\":\"" + email + "\"}",
            "method": "POST",
            "mode": "cors"
        });

        return true;
    })
}
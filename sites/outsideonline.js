const fetch = require('node-fetch');

module.exports = {
    name: "Outside Online",
    url: "https://www.outsideonline.com/2063191/outside-magazine-newsletter-signup",
    signup: (async (email, _encodedEmail) => {
        await fetch("https://api.sail-track.com/v1/track/user/signup", {
            "headers": {
                "accept": "application/json",
                "accept-language": "en-US,en;q=0.9",
                "authorization": "Bearer b112a61d8ef97343cade80b6f0a47e18",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site",
                "x-lib-version": "v1.0.1"
            },
            "referrer": "https://www.outsideonline.com/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"vars\":{\"signup_date\":\"2021-03-18\",\"move_every_day\":true,\"dispatch\":true,\"what_you_missed\":true,\"bodywork\":true,\"destinations\":true,\"gear_fix\":true,\"watchlist\":true,\"indefinitely_wild\":true,\"deal_fix\":true,\"sponsor\":true,\"source\":\"newsletter-signup_basic-page\"},\"lists\":{\"Master List\":1},\"email\":\"" + email + "\",\"content\":\"cccc1f37572e39b341525e75e4f4f503\"}",
            "method": "POST",
            "mode": "cors"
        })
        return true;
    })
}
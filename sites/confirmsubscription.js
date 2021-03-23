const fetch = require('node-fetch');

module.exports = {
    name: "Confirm Subscription",
    url: "https://www.confirmsubscription.com/",
    signup: (async (email, _encodedEmail) => {
        await fetch("https://confirmsubscription.com/t/t/HostedSubscribeForm/yhhrtly", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://confirmsubscription.com/h/t/6925B3D1925FFCCF",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"fields\":[{\"id\":\"fieldName\",\"type\":\"Text\",\"value\":[\"AAAAA BBBBB\"]},{\"id\":\"fieldEmail\",\"type\":\"Email\",\"value\":[\"" + email + "\"]}],\"referrer\":\"https://www.reddit.com/\",\"reCaptchaResponse\":null}",
            "method": "POST",
            "mode": "cors"
        });
        fetch("https://confirmsubscription.com/t/d/HostedSubscribeForm/jrdkkkk", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://confirmsubscription.com/h/d/111B22A75495D78E",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"fields\":[{\"id\":\"fieldName\",\"type\":\"Text\",\"value\":[\"AAAAA BBBBB\"]},{\"id\":\"fieldEmail\",\"type\":\"Email\",\"value\":[\"" + email + "\"]},{\"id\":\"fieldjyykiti\",\"type\":\"MultiSelectOne\",\"value\":[\"5581772\"]}],\"referrer\":\"https://www.reddit.com/\",\"reCaptchaResponse\":null}",
            "method": "POST",
            "mode": "cors"
        });
        return true;
    })
}
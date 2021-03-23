const fetch = require('node-fetch');

module.exports = {
    name: "NBC Connecticut",
    url: "https://www.nbcconnecticut.com/newsletters/",
    signup: (async (email, _encodedEmail) => {
        await fetch("https://www.nbcconnecticut.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
            "headers": {
                "accept": "application/json, */*;q=0.1",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://www.nbcconnecticut.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"WVIT_coronavirus\":1,\"WVIT_News7am\":1,\"WVIT_NewsNoon\":1,\"WVIT_News8p\":1,\"WVIT_BreakingNews\":1,\"WVIT_Weather\":1,\"WVIT_Contest\":1,\"WVIT_Entertainment\":1,\"WVIT_Olympics\":1}}",
            "method": "POST",
            "mode": "cors"
        })
        return true;
    })
}
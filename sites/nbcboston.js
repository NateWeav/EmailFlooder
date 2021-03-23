const fetch = require('node-fetch');

module.exports = {
    name: "NBC Boston",
    url: "https://www.nbcboston.com/newsletters/",
    signup: (async (email, _encodedEmail) => {
        await fetch("https://www.nbcboston.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
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
            "referrer": "https://www.nbcboston.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"WBTS_coronavirus\":1,\"WBTS_BreakingNews\":1,\"WBTS_News7am\":1,\"WBTS_NewsNoon\":1,\"WBTS_News5pm\":1,\"WBTS_News11pm\":1,\"WBTS_Weather\":1,\"WBTS_Entertainment\":1,\"WBTS_Investigations\":1,\"WBTS_Contests\":1}}",
            "method": "POST",
            "mode": "cors"
        })
        return true;
    })
}
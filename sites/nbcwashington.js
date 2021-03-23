const fetch = require('node-fetch');

module.exports = {
    name: "NBC Washington",
    url: "https://www.nbcwashington.com/newsletters/",
    signup: (async (email, _encodedEmail) => {
        await fetch("https://www.nbcwashington.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
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
            "referrer": "https://www.nbcwashington.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"WRC_coronavirus\":1,\"WRC_News7am\":1,\"WRC_NewsNoon\":1,\"WRC_News8pm\":1,\"WRC_Olympics\":1,\"WRC_BreakingNews\":1,\"WRC_Contests\":1,\"WRC_Sports\":1,\"WRC_Entertainment\":1,\"WRC_Weather\":1}}",
            "method": "POST",
            "mode": "cors"
        })
        return true;
    })
}
const fetch = require('node-fetch');

module.exports = {
    name: "NBC New York",
    url: "https://www.nbcnewyork.com/newsletters/",
    signup: (async (email, _encodedEmail) => {
        await fetch("https://www.nbcnewyork.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
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
            "referrer": "https://www.nbcnewyork.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"WNBC_News7am\":1,\"WNBC_News11pm\":1,\"WNBC_Contests\":1,\"WNBC_BreakingNews\":1,\"WNBC_Weather\":1,\"WNBC_Olympics\":1}}",
            "method": "POST",
            "mode": "cors"
        })
        return true;
    })
}
const fetch = require('node-fetch');

module.exports = {
    name: "NBC Bay Area",
    url: "https://www.nbcbayarea.com/newsletters/",
    signup: (async (email, _encodedEmail) => {
        await fetch("https://www.nbcbayarea.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
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
            "referrer": "https://www.nbcbayarea.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"kntv_coronavirus\":1,\"KNBC_News7am\":1,\"KNBC_NewsNoon\":1,\"KNBC_News5pm\":1,\"KNBC_BreakingNews\":1,\"KNBC_Weather\":1,\"KNBC_Sports\":1,\"KNBC_Entertainment\":1,\"KNBC_Contests\":1,\"KNBC_Olympics\":1}}",
            "method": "POST",
            "mode": "cors"
        })
        return true;
    })
}
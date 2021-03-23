const fetch = require('node-fetch');

module.exports = {
    name: "NBC Sandiego",
    url: "https://www.nbcsandiego.com/newsletters/",
    signup: (async (email, _encodedEmail) => {
        await fetch("https://www.nbcsandiego.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
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
            "referrer": "https://www.nbcsandiego.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"KNSD_coronavirus\":1,\"KNSD_News7am\":1,\"KNSD_NewsNoon\":1,\"KNSD_News6pm\":1,\"KNSD_BreakingNews\":1,\"KNSD_Weather\":1,\"KNSD_Sports\":1,\"KNSD_TheScene\":1,\"KNSD_Contests\":1,\"KNSD_SoundDiego\":1,\"KNSD_SoundDiegoPlatinum\":1,\"KNSD_WorthTheTrip\":1}}",
            "method": "POST",
            "mode": "cors"
        })
        return true;
    })
}
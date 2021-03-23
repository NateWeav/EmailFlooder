const fetch = require('node-fetch');

module.exports = {
    name: "Fox News",
    url: "https://www.foxnews.com/newsletters",
    signup: (async (email, encodedEmail) => {
        const subscribe = async slid => {
            return await fetch("https://www.foxnews.com/portal/newsalertsubscribe", {
                "headers": {
                    "accept": "*/*",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "x-requested-with": "XMLHttpRequest"
                },
                "referrer": "https://www.foxnews.com/newsletters",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": "email=" + encodedEmail + "&slids=" + slid,
                "method": "POST",
                "mode": "cors"
            })
        }

        let subIDs = [
            '3DC725E303A24F8D7457D18811A93C18',
            '3DC725E303A24F8D106D04335B030A1E',
            '3DC725E303A24F8DBA8D7ED90EFD2033',
            '3DC725E303A24F8DE8DB8BD2CA76E43D',
            '3DC725E303A24F8DB2CE37CF687DE56B',
            '3DC725E303A24F8D2F397E652DAD2AE6',
            '3DC725E303A24F8D8BF986F69AEAACEA',
            '3DC725E303A24F8D0E2C21B39073C09B',
            '3DC725E303A24F8D10BFA69067B1CAC9'
        ]

        let promises = [];
        for (const id of subIDs) {
            promises.push(
                subscribe(id)
            );
        }

        promises.push(
            fetch("https://www.foxnews.com/portal/newsalertsubscribe?type=foxnation", {
                "headers": {
                    "accept": "*/*",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "application/json",
                    "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "x-requested-with": "XMLHttpRequest",
                },
                "referrer": "https://www.foxnews.com/newsletters",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": "{\"email\":\"" + email + "\",\"campaign\":\"fox-nation\",\"url\":\"https://www.foxnews.com/newsletters\"}",
                "method": "POST",
                "mode": "cors"
            })
        )

        await Promise.all(promises);
        return true;
    })
}
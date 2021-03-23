const fetch = require('node-fetch');

module.exports = {
    name: "WGAL8",
    url: "https://link.wgal.com/join/5e3/signin",
    signup: (async (email, _encodedEmail) => {
        await fetch("https://link.wgal.com/manage/5e3/optout?email=" + email, {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en-US,en;q=0.9",
                "cache-control": "max-age=0",
                "content-type": "application/x-www-form-urlencoded",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1"
            },
            "referrer": "https://link.wgal.com/manage/5e3/optout?email=" + email,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "lists%5Bwgal_news_closings%5D=on&lists%5Bwgal_news_afternoon_headlines%5D=on&lists%5Bwgal_matter_of_fact%5D=on&lists%5Bwgal_news_weather_forecast%5D=on&lists%5Bwgal-coronavirus%5D=on&lists%5Bwgal_news_politics%5D=on&lists%5Bwgal_news_local_breaking%5D=on&lists%5Bwgal_news_national_breaking%5D=on&lists%5Bwgal_news_morning_headlines%5D=on&lists%5Bwgal_consumer_news%5D=on&lists%5Bwgal_news_entertainment%5D=on&lists%5Bwgal_weather_alerts_PAC001%5D=on&lists%5Bwgal_weather_alerts_MDC510%5D=on&lists%5Bwgal_weather_alerts_MDC005%5D=on&lists%5Bwgal_weather_alerts_PAC011%5D=on&lists%5Bwgal_weather_alerts_MDC013%5D=on&lists%5Bwgal_weather_alerts_PAC029%5D=on&lists%5Bwgal_weather_alerts_PAC041%5D=on&lists%5Bwgal_weather_alerts_PAC043%5D=on&lists%5Bwgal_weather_alerts_PAC055%5D=on&lists%5Bwgal_weather_alerts_MDC021%5D=on&lists%5Bwgal_weather_alerts_PAC067%5D=on&lists%5Bwgal_weather_alerts_PAC071%5D=on&lists%5Bwgal_weather_alerts_PAC075%5D=on&lists%5Bwgal_weather_alerts_PAC087%5D=on&lists%5Bwgal_weather_alerts_PAC099%5D=on&lists%5Bwgal_weather_alerts_PAC107%5D=on&lists%5Bwgal_weather_alerts_PAC133%5D=on&profile_id=60539c4e0cc4dc404c68680b&st_form_num=0",
            "method": "POST",
            "mode": "cors"
        });
        return true;
    })
}
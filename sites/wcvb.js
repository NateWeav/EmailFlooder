const fetch = require('node-fetch');

module.exports = {
    name: "WCVB5",
    url: "https://link.wcvb.com/join/5e3/signin",
    signup: (async (email, _encodedEmail) => {
        await fetch("http://link.wcvb.com/manage/5e0/optout?email=" + email, {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en-US,en;q=0.9",
                "cache-control": "max-age=0",
                "content-type": "application/x-www-form-urlencoded",
                "upgrade-insecure-requests": "1"
            },
            "referrer": "http://link.wcvb.com/manage/5e0/optout?email=" + email,
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "lists%5Bwcvb_news_entertainment%5D=on&lists%5Bwcvb_news_local_breaking%5D=on&lists%5Bwcvb_news_weather_forecast%5D=on&lists%5Bwcvb-coronavirus%5D=on&lists%5Bwcvb_consumer_news%5D=on&lists%5Bwcvb_news_morning_headlines%5D=on&lists%5Bwcvb_news_politics%5D=on&lists%5Bwcvb_news_afternoon_headlines%5D=on&lists%5Bwcvb_matter_of_fact%5D=on&lists%5Bwcvb_chronicle%5D=on&lists%5Bwcvb_news_national_breaking%5D=on&lists%5Bwcvb_weather_alerts_MAC001%5D=on&lists%5Bwcvb_weather_alerts_NHC001%5D=on&lists%5Bwcvb_weather_alerts_MAC005%5D=on&lists%5Bwcvb_weather_alerts_NHC005%5D=on&lists%5Bwcvb_weather_alerts_MAC007%5D=on&lists%5Bwcvb_weather_alerts_MAC009%5D=on&lists%5Bwcvb_weather_alerts_NHC011%5D=on&lists%5Bwcvb_weather_alerts_NHC013%5D=on&lists%5Bwcvb_weather_alerts_MAC017%5D=on&lists%5Bwcvb_weather_alerts_MAC019%5D=on&lists%5Bwcvb_weather_alerts_MAC021%5D=on&lists%5Bwcvb_weather_alerts_MAC023%5D=on&lists%5Bwcvb_weather_alerts_NHC015%5D=on&lists%5Bwcvb_weather_alerts_NHC017%5D=on&lists%5Bwcvb_weather_alerts_MAC025%5D=on&lists%5Bwcvb_weather_alerts_VTC025%5D=on&lists%5Bwcvb_weather_alerts_MAC027%5D=on&profile_id=60539d4f2547d0534273649f&st_form_num=0",
            "method": "POST",
            "mode": "cors"
        });
        return true;
    })
}
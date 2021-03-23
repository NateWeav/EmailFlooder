const fetch = require('node-fetch');

module.exports = {
    name: "MSNBC",
    url: "https://www.msnbc.com/newsletters",
    signup: (async (_email, encodedEmail) => {
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
            "body": "email=" + encodedEmail + "&lists%5BMaster%5D=1&vars%5Bsub_msnbcupdates%5D=1&vars%5Bsource%5D=signup-page&g-recaptcha-response=03AGdBq27AKlSQqnwkXjRcumtv2Az3CHHOv9cGNC2tpq2AahGSs1EYPvWzNk5KKcKiQsIdE1CMBsUD3pu_qsrdrJfhFKxJRiVR3TJk2t1wyRoA2n2FjsoCQ3FO4W7n7-NK6WQYY7JMmSumV2dqNDuWOKJpNE1F9bm2xYuI9thwoCzGj8fQIh7PTnaho4bu9bXqkHtDezAHk9OwUbyE77mw_tib6caAS-iz52AEVmgYDV-qJc35izvv7I9Q_fUlh8Y5G27p58_kbyfZe_mjaoQ62-1zl_ne4XQDK7dXB4Io_gr1dVr9sYHbOmK_78ZKUP66GVSTwuGff0bhZIJbLNYuD4BaRe3HetqCHvBPiwo7GQb8HJ4GukOtdkYNVcrF6nmJ_Pa1G5XBGpaWtUi_gqEeoy_Z-63vv5Rtfd5iG_jf4o9A7RFnD7WYiaeot1RhZT9wIDGIw2Cu21T4&nonce_6053a65a2c778=6053a65a2c779&profile_id=591edf3bade9c297078b4594&st_form_num=0",
            "method": "POST",
            "mode": "cors"
        });
        return true;
    })
}
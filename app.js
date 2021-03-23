const readline = require('readline');
const consola = require('consola');
const flood = require('./flood');
const colors = require('colors');

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
        await flood(enteredEmail);

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
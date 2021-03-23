const fs = require('fs');
const consola = require('consola');

const flood = async (email, log = true) => {
    const encodedEmail = email.replace('@', '%40');
    const siteFiles = fs.readdirSync('./sites');

    let promises = [];
    for (const file of siteFiles) {
        const site = require(`./sites/${file}`);

        promises.push(
            new Promise(async (resolve, reject) => {
                await site.signup(email, encodedEmail)
                if (log) consola.success(`Signed up for ${site.url}`);
                resolve(true);
            })
        );
    }

    await Promise.all(promises.map(p => p.catch(e => e)));
    if (log) consola.success(`Finished all sites!`);

    return promises.length;
}

module.exports = flood;
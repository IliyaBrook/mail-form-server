"use strict";
const nodemailer = require("nodemailer");


async function main() {

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: 'celestino28@ethereal.email',
            pass: 'KTvRJ57WxWGPQxUBQD',
        },
    });
    const mailer = (message) => {
        transporter.sendMail((message), (err, info) => {
            if (err) {
                console.log(err)
                console.log(info)
            }
        })
    }
    module.exports = mailer
}

main().catch(console.error);

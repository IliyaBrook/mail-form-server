const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors')
const nodemailer = require('nodemailer');
const jsonParser = bodyParser.json()
const PORT = process.env.PORT || "8000"
const app = express();
app.use(express.static(path.join(__dirname, 'public')))
const mailer = require('./nodeMailer')



async function startServer() {
    try {
        // Cors access rolls a allow all
        app.use(cors({
            "Access-Control-Allow-Origin": "*"
        }))
        app.get('', (req, res) => {
            res.sendFile(__dirname + '/public/Server-main-page.html')
        })
        await app.post('', jsonParser, (req, res) => {
            mailer({
                from:req.body.clientEmail,
                to:'iliyabrook1987@gmail.com',
                subject:'MY WEB SITE!',
                text:req.body.clientMessage
            })
            res.send()
        })
    } catch (e) {
        console.log(e)
    }
}
startServer().catch((e => console.log(e)))

app.listen(PORT, () => {
    console.log(`Server connect with port ${PORT}`)
})

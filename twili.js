const express = require('express');
const client = require('twilio')('ACb6a6e157a1e634ba21aec5ffa44aff21','52d766c9d23541d4cff4550245c44dad');
const dotenv = require('dotenv');
const otpGenerator = require('otp-generator');


var app = express();
const port = 3000;

app.get('/', (req,res) => {
    envoieMessage();
    res.send(`
    <div style="text-align:center; padding-top:40px;">
    <h1> Bienvenu</h1>
    <p> Verification app</p>
    </div>
    `);
})

app.listen(port,() => {
    console.log(`En ecoute dans http://localhost:${port}`)
})

async function envoieMessage(){
    // Générer un OTP à 6 chiffres
    const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false, alphabets: false });

    //const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
    client.messages.create({
        body : `Votre code de vérification est : ${otp}`,
        to: '+18037212058',
        from:'+18435470224'
    }).then(message => console.log(message))

    .catch(error => console.log(error))
}
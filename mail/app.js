// iscl wxtw lglf yspq
const nodemailer = require('nodemailer');
const otpGenerator = require('otp-generator');
// Générer un OTP à 6 chiffres
const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false, alphabets: false });

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "hivestock92@gmail.com",
      pass: "isclwxtwlglfyspq",
    },
  });

  transporter.verify().then(() => {
    console.log("Pret pour envoyer un email");
  });

  // Fonction pour envoyer l'e-mail avec l'OTP
function envoyerEmail(otp) {
    const mailOptions = {
      from: '"HiveStock" <hivestock92@gmail.com>',
      to: 'denil.bouafia@etu.umontpellier.fr',
      subject: 'Votre OTP',
      text: `Votre OTP est : ${otp}`
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
      } else {
        console.log('E-mail envoyé:', info.response);
      }
    });
  }
  
  // Exemple d'utilisation
 
  //const otp = '123456'; // Remplacer ceci par votre OTP généré
  envoyerEmail(otp);
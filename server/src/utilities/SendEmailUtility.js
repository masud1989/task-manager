var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

const SendEmailUtility= async (EmailTo, EmailText, EmailSubject) => {

    let transporter = nodemailer.createTransport({
        host: 'mail.teamrabbil.com',
        port: 25,
        secure: false,
        auth: {
            user: "info@teamrabbil.com",
            pass: '~sR4[bhaC[Qs'
        },tls: {
            rejectUnauthorized: false
        },

        // service: 'gmail',
        // host: 'smtp.gmail.com',
        // secure: false,
        // auth: {
        //   user: 'mranasrj01@gmail.com',
        //   pass: 'A01011989a'
        // },tls: {
        //          rejectUnauthorized: false
        //      }
    });


    let mailOptions = {
        from: 'Task Manager MERN <mranasrj01@gmail.com>',
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText
    };

    
   return  await transporter.sendMail(mailOptions)

}
module.exports=SendEmailUtility
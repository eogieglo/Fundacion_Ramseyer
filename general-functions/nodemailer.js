const nodemailer = require('nodemailer')

module.exports =  (emailContent, email, ref)=>{

       let transporter = nodemailer.createTransport({
           host: "mail.fundacionramseyer.org.ar",
           port : 26,
           secure: false,
           auth: {
               user: "administracion@fundacionramseyer.org.ar",
               pass: "Admin2020*"
           },
           tls : {
               rejectUnauthorized : false
           }            
       });       

       let mailOptions = {
           from:  "administracion@fundacionramseyer.org.ar",
           to: email,
           subject: ref,
           html: emailContent
       }           
       
       transporter.sendMail(mailOptions, (error, info)=>{
           if(error){
               console.log('no se pudo enviar el email ' + error)
           }
           else{
               console.log('Email enviado con exito');               
           }
       })     

    }
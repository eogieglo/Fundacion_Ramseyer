const nodemailer = require('nodemailer')


let indexFunctions = {
    home : (req, res, next)=>{
        res.render('index');
    },
    
    contact : (req, res, next) =>{     
        
        let emailContent = `
        <ul>
        <li>Nombre : ${req.body.nombre}</li>
        <li>Email del sujeto : <strong> ${req.body.email}</strong>
        </ul>
        <p>Mensaje : ${req.body.mensaje}</p>
        `

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
            to: "administracion@fundacionramseyer.org.ar",
            subject: req.body.asunto,
            html: emailContent
        }           
        
        transporter.sendMail(mailOptions, (error, info)=>{
            if(error){
                console.log('no se pudo enviar el email ' + error)
            }
            else{
                console.log('Email enviado con exito');
                res.redirect('/')
            }
        })       
        
    },   
    
    
    sendNewsletter : (req, res, next)=>{
    
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
          from: "administracion@fundacionramseyer.org.ar",
          to: req.body.email,
          subject: "Hola, nos contactamos desde la Fundación Ramseyer",
          html: "<p> Gracias por suscribirte a nuestra fundación </p>"
        
        }
        
        transporter.sendMail(mailOptions, (error, info)=>{
            if(error){
                console.log('no se pudo enviar el email ' + error)
            }
            else{
                console.log('Email sent: ' + info.response);
                res.redirect('/')
            }
        })      
    }
    
    
    
}

module.exports = indexFunctions
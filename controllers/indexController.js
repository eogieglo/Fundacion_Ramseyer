const nodemailer = require('nodemailer')


let indexFunctions = {
    home : (req, res, next)=>{
        res.render('index');
    },
    
    contact : (req, res, next) =>{     
        
        let transporter = nodemailer.createTransport({
            service: "gmail.com",
            secure: false,
            auth: {
                user: "enviofarmaciadigital@gmail.com",
                pass: "papitaloca23"
            },            
        });
        
        let mailOptions = {
            from: "enviofarmaciadigital@gmail.com",
            to: "recibidofarmaciadigital@gmail.com",
            subject: req.body.asunto,
            html: "<p>Nombre : </p> " + req.body.nombre + "<br> <p>Email del sujeto : </p> " +             
            req.body.email + "<br> <p>Mensaje : </p> " + req.body.mensaje
        }           
        
        transporter.sendMail(mailOptions, (error, info)=>{
            // if(error){
            //     console.log('no se pudo enviar el email ' + error)
            // }
            // else{
            //     console.log('Email sent: ' + info.response);
            // }
            res.redirect('/')
        })       
        
    },   
    
    
    sendNewsletter : (req, res, next)=>{
    
        let transporter = nodemailer.createTransport({
            service: "gmail.com",
            secure: false,
            auth: {
                user: "mariotroiano2@gmail.com",
                pass: "Marito1993!!"
            },            
        });
        
        let mailOptions = {
          from: "mariotroiano2@gmail.com",
          to: req.body.email,
          subject: "Hola, nos contactamos desde la Fundación Ramseyer",
          html: "<p> Gracias por suscribirte a nuestra fundación </p>"
        
        }
        
        transporter.sendMail(mailOptions, (error, info)=>{
            // if(error){
            //     console.log('no se pudo enviar el email ' + error)
            // }
            // else{
            //     console.log('Email sent: ' + info.response);
            // }
            res.redirect('/')
        })      
    }
    
    
    
}

module.exports = indexFunctions
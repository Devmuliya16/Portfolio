const nodemailer = require('nodemailer');
const sendmail = async (req,res)=>{
  if(req.method!=='POST')
  res.end();
  console.log(req.body)
    const response = await send(req.body);
    if(response)
    res.status(200).send(true);
    else
    res.status(400).send(false);
    
}
export default sendmail

const send = async (data)=>{
    const transporter = nodemailer.createTransport({
        host: process.env.SERVER,
        port: process.env.PORT,
        secure:false,
        auth: {
          user: process.env.USER_MAIL_FROM,
          pass: process.env.MAIL_KEY,
        }
      });

    const message = {
        from: process.env.USER_MAIL_FROM,
        to: process.env.USER_MAIL_TO,
        subject: 'contact from '+ data[0].name,
        html: `<html>
        <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            font-size: 16px;
            line-height: 1.5;
            color: #333;
          }
          h1 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
          }
          p {
            margin-bottom: 10px;
          }
          strong {
            font-weight: bold;
          }
        </style>
      </head>
        <body>
          <h1>New Message</h1>
          <p><strong>Name: </strong> ${ data[0].name}</p>
          <p><strong>Email: </strong> ${ data[0].email }</p>
          <p><strong>Message: </strong> ${ data[0].message }</p>
          <p><strong>Longitude: </strong> ${ data[1].long }</p>
          <p><strong>Latitude: </strong> ${ data[1].lat }</p>
        
        </body>
      </html>`
    }
    transporter.sendMail(message, function(error, info) {
        if (error) {
          console.log(error.message);
          return false;
        } else {
          console.log('Email sent: ' + info.response);
          return true;
        }
      });
}
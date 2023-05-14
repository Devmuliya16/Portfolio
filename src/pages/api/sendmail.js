const nodemailer = require('nodemailer');


const sendmail = async (req, res) => {
  if (req.method !== 'POST' || req.headers.cookie){
    res.status(400).send({message: 'limit exceeded some hours'})
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SERVER,
    port: 465,
    secure: true,
    secureConnection: false,
    auth: {
      user: process.env.USER_MAIL_FROM,
      pass: process.env.MAIL_KEY,
    },
    tls: {
      rejectUnAuthorized: true
    }
  });

  const message = getmessage(req.body,req.connection.remoteAddress);
  const info = await transporter.sendMail(message);
  if(info.accepted[0]){
    res.setHeader('Set-Cookie', ['Access=324986321685; Max-Age=7200; Path=/']);
    res.status(200).send({message:'message sent successfully'})
  }
  else
  res.status(400).send({message: 'could not send message'})
  
}
export default sendmail


const getText = (data,ip) =>{
  return `Message from portfolio website \nSender: ${data[0].name} \nEmail: ${data[0].email} \nMessage: ${data[0].message} \nLongitude: ${data[1].long} \nLatitude: ${data[1].lat} \nIp Address: ${ip} \n`
}


const getmessage = (data,ip) => {
  return {
    from: process.env.USER_MAIL_FROM,
    to: process.env.USER_MAIL_TO,
    subject: 'Portfolio contact from ' + data[0].name,
    text: getText(data,ip),
    html: `<html>
  <head>
  <style>
    body {
      font-family: Arial, sans-serif;
      font-size: 20px;
      line-height: 1.5;
      color: #BBBBBB;
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
    <h1>New Message from ${data[0].name}</h1>
    <p><strong>Name: </strong> ${data[0].name}</p>
    <p><strong>Email: </strong> ${data[0].email}</p>
    <p><strong>Message: </strong> ${data[0].message}</p>
    <p><strong>Longitude: </strong> ${data[1].long}</p>
    <p><strong>Latitude: </strong> ${data[1].lat}</p>
    <p><strong>Ip address: </strong> ${ip}</p>
  
  </body>
</html>`

  }
}
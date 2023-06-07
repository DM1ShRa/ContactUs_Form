const express = require('express');
const path = require("path");
const app = express();
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('contact')
})

app.post('/', (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '2021.darash.mishra@ves.ac.in',
            pass: '@apjschool17903'

        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'darash.mishra@gmail.com',
        subject: req.body.subject,
        text: `Message from ${req.body.name}: \n ${req.body.message}`
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email Sent' + info.response);
            res.send('success');
        }
    })

})

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`)
})
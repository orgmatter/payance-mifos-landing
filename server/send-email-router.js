const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();


const requestDemoRouter = router.post('/', (req, res) => {
    const { 
        companyName,
        companyType,
        companySize,
        companyLoc,
        customerBase,
        companyEmail,
        scheduledDate,
        otherDetails
    } = req.body

    const mailOptions = {
        from: companyEmail,
        to: process.env.GMAIL_USER,
        subject: `Demo Request From: ${companyName}`,
        html: `<table border="1">
            <tr><th>Company Name:</th><td>${companyName}</td></tr>
            <tr><th>Company Type:</th><td>${companyType}</td></tr>
            <tr><th>Company Size:</th><td>${companySize}</td></tr>
            <tr><th>Customer Base:</th><td>${customerBase}</td></tr>
            <tr><th>Company Email:</th><td>${companyEmail}</td></tr>
            <tr><th>Company Location:</th><td>${companyLoc}</td></tr>
            <tr><th>Scheduled Date:</th><td>${scheduledDate}</td></tr>
            <tr><th>Other Details:</th><td>${otherDetails}</td></tr>
        </table>`
    }

    const mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
            clientId: process.env.GMAIL_CLIENT_ID,
            clientSecret: process.env.GMAIL_CLIENT_SECRET,
            refreshToken: process.env.GMAIL_REFRESH_TOKEN
        }
    })

    mailTransporter.verify((err, success) => {
        if(err) {
            console.log('Email failed to verify: ', err.message);
        }
        mailTransporter.sendMail(mailOptions, (err, success) => {
            if(err) {
                res.json({
                    status: 'fail'
                })
            }
            res.json({
                status: 'success'
            })
        })
    })
})


const getQuoteRouter = router.post('/', (req, res) => {
    const { 
        companyName,
        companyType,
        companySize,
        companyLoc,
        customerBase,
        companyEmail,
        requestService,
        otherDetails
    } = req.body

    const mailOptions = {
        from: companyEmail,
        to: process.env.GMAIL_USER,
        subject: `Requesting a Quote for: ${requestService}`,
        html: `<table border="1">
            <tr><th>Company Name:</th><td>${companyName}</td></tr>
            <tr><th>Company Type:</th><td>${companyType}</td></tr>
            <tr><th>Company Size:</th><td>${companySize}</td></tr>
            <tr><th>Customer Base:</th><td>${customerBase}</td></tr>
            <tr><th>Company Email:</th><td>${companyEmail}</td></tr>
            <tr><th>Company Location:</th><td>${companyLoc}</td></tr>
            <tr><th>Scheduled Date:</th><td>${requestService}</td></tr>
            <tr><th>Other Details:</th><td>${otherDetails}</td></tr>
        </table>`
    }

    const mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
            clientId: process.env.GMAIL_CLIENT_ID,
            clientSecret: process.env.GMAIL_CLIENT_SECRET,
            refreshToken: process.env.GMAIL_REFRESH_TOKEN
        }
    })

    mailTransporter.verify((err, success) => {
        if(err) {
            console.log('Email failed to verify: ', err.message);
        }
        mailTransporter.sendMail(mailOptions, (err, success) => {
            if(err) {
                res.json({
                    status: 'fail'
                })
            }
            res.json({
                status: 'success'
            })
        })
    })
})


module.exports = {
    requestDemoRouter,
    getQuoteRouter
}
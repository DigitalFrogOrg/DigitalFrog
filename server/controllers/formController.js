const transporter = require('../config/smtp')
const {validateEmail} = require('../utils/validators')

const submitForm = async(req,res) => {
    try{
        const {fullName,email,projectType,timeline,phoneNumber,description,budget} = req.body

        if (!email || !validateEmail(email)) {
            return res.status(400).json({ error: "Invalid email format. Please provide a valid email address." });
        }

        //Email content
        const mailOptions = {
            from: process.env.SMTP_USER,
            to:'test123@gmail.com',
            subject:'New Project Submission',
            text:`You have a new project submission:\n\n
            Full Name: ${fullName}\n
            Email: ${email}\n
            Type of Project: ${projectType}\n
            Timeline: ${timeline}\n
            phoneNumber: ${phoneNumber}\n
            description: ${description}\n
            budget: ${budget}`
        }

        //send email
        console.log('mail send',mailOptions)
        // await transporter.sendMail(mailOptions)
        res.status(200).json({message:'Form submitted successfully.'})
    }catch(error){
        console.log('Error sending email: ',error)
        res.status(500).json({error:'Failed to submit the form'})
    }
}

module.exports = {submitForm}
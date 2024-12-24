const transporter = require('../config/smtp')
const {validateEmail} = require('../utils/validators')

const submitForm = async(req,res) => {
    try{
        const {fullName,email,projectType,timeline,phoneNumber,description,budget,nda} = req.body
        
        if (!email || !validateEmail(email)) {
            return res.status(400).json({ error: "Invalid email format. Please provide a valid email address." });
        }

        let uploadedFile = null;
        if (req.file) {
          uploadedFile = {
            originalName: req.file.originalname,
            savedName: req.file.filename, 
            path: req.file.path,
            size: req.file.size,
          };
        }

        //Email content
        const mailOptions = {
            from: process.env.SMTP_USER,
            to:email,
            subject:'New Project Submission',
            text:`You have a new project submission:\n\n
            Full Name: ${fullName || 'N/A'}\n
            Email: ${email || 'N/A'}\n
            Type of Project: ${projectType || 'N/A'}\n
            Timeline: ${timeline || 'N/A'}\n
            phoneNumber: ${phoneNumber || 'N/A'}\n
            description: ${description || 'N/A'}\n
            budget: ${budget ? `$${budget}` : 'N/A'}\n
            File: ${uploadedFile ? uploadedFile.savedName : "N/A"}\n
            Nda: ${nda ? nda : "N/A"}\n`
        }

        //send email
        await transporter.sendMail(mailOptions)
        res.status(200).json({message:'Form submitted successfully.'})
    }catch(error){
        console.log('Error sending email: ',error)
        res.status(500).json({message:'Failed to submit the form'})
    }
}

module.exports = {submitForm}
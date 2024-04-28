const UserQuestion = require("../../models/UserQuestion");
const nodemailer = require("nodemailer")
require("dotenv").config()

const regex_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const userQuestion = async (req, res) => {

    //requesting body
    const { firstName, lastName, mobile, email, adress, question} = req.body; 

        //tryign to get the form info 
        try {

            //saving the data to database
            let newQuestion = new UserQuestion({firstName, lastName, mobile, email, adress, question});
            let savedQuestion = await newQuestion.save();

            //sending mail with info from user
            const mailSender = async (firstName, lastName, email, question) => {

                const transporter = nodemailer.createTransport({
                    service: "gmail",
                    host: 'smtp.gmail.com',
                    port: 587,
                    secure: false,
                    auth: {
                        user: process.env.EMAIL,
                        pass: process.env.PORTFOLIO_APP
                    }
                });

                const info = await transporter.sendMail({
                    from: process.env.EMAIL,
                    to: process.env.RECEIVING_EMAIL,
                    subject: 'User Question',
                    html: `
                    <h1>User Question</h1>
                    <p>from: ${firstName} ${lastName}</p>
                    <p>email: ${email}</p>
                    <p>question: ${question}</p>
                    `
                });

                console.log("message sent: " + info.messageId);

            }
            mailSender(savedQuestion.firstName, savedQuestion.lastName, savedQuestion.email, savedQuestion.question).catch(e => console.log(e))
            res.redirect('back');
        }catch (err) {
            console.log(err)
        }
}

module.exports = userQuestion;
import Nodemailer from "nodemailer";
import MailgunTransport from "mailgun-nodemailer-transport";

export async function POST(request) {

    const messageData = await request.json();

    const transporter = Nodemailer.createTransport(new MailgunTransport({
        auth: {
            apiKey: process.env.MAIL_API_KEY,
            domain: process.env.MAIL_DOMAIN,
        },
    }));

    const mailOptions = {
        from: `Preserved's Website <noreply@${process.env.MAIL_DOMAIN}>`,
        to: process.env.MAIL_RECEIVER_EMAIL,
        subject: `New Portfolio Message from ${messageData.name}`,
        text: messageData.message,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log(`Email info is ${JSON.stringify(info, null, 2)}`)
        return new Response('Success!', {status: 200});

    } catch (error) {
        console.log(error)
        return new Response('Bad Email Request', {status: 400});
    }

}
import Nodemailer from "nodemailer";

export async function POST(request) {

    const messageData = await request.json();

    const transporter = Nodemailer.createTransport({
        service: 'Yahoo',
        auth: {
            user: process.env.YAHOO_EMAIL,
            pass: process.env.YAHOO_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.YAHOO_EMAIL,
        to: process.env.RECEIVER_EMAIL,
        subject: `New Portfolio Message from ${messageData.name}`,
        text: messageData.message,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return new Response('Success!', {status: 200});

    } catch (error) {
        return new Response('Bad Email Request', {status: 400});
    }

}
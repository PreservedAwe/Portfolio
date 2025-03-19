import Nodemailer from "nodemailer";
import requestIp from 'request-ip';
import prisma from "@/lib/prisma";
import MailgunTransport from "mailgun-nodemailer-transport";

export async function POST(request) {

    const messageData = await request.json();

    const visitor = await prisma.visitors.findUnique({
        where: {
            visitor_id: messageData.visitorId,
        },
    })
    if(visitor == null){
        try {
            let clientIp = requestIp.getClientIp(request); 
            if(clientIp == "127.0.0.1" || clientIp == null){
                clientIp = "66.230.105.38";
            }
            const response = await fetch(`http://ip-api.com/json/${clientIp}`);
            const data = await response.json();
            if (data.status === 'fail') {
                return new Response('Server Error', {status: 400});
            };
            const timestampCurrent = new Date().toISOString();
            await prisma.visitors.create({
                data: {
                    visitor_id: messageData.visitorId,
                    confidence: messageData.confidence,
                    user_agent: messageData.user_agent,
                    timezone: messageData.timezone,
                    country: data.country,
                    city: data.city,
                    isp: data.isp,
                    timestamp: timestampCurrent,
                },
            });

            const transporter = Nodemailer.createTransport(new MailgunTransport({
                auth: {
                    apiKey: process.env.MAIL_API_KEY,
                    domain: process.env.MAIL_DOMAIN,
                },
            }));
        
            const mailOptions = {
                from: `Preserved's Website <noreply@${process.env.MAIL_DOMAIN}>`,
                to: process.env.MAIL_RECEIVER_EMAIL,
                subject: `New Unique User Found! Find out more!`,
                html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.5;">
                    <h2>New Unique User Detected:</h2>
                    <hr>
                    <p><strong>Visitor ID:</strong> ${messageData.visitorId}</p>
                    <p><strong>Confidence:</strong> ${messageData.confidence}</p>
                    <p><strong>User Agent:</strong> ${messageData.user_agent}</p>
                    <p><strong>Timezone:</strong> ${messageData.timezone}</p>
                    <p><strong>Country:</strong> ${data.country}</p>
                    <p><strong>City:</strong> ${data.city}</p>
                    <p><strong>ISP:</strong> ${data.isp}</p>
                    <p><strong>Timestamp:</strong> ${timestampCurrent}</p>
                    <hr>
                    <p>Thank you for your attention!</p>
                </div>
            `
            };
            try {
                console.log("New Visitor Created");
                const info = await transporter.sendMail(mailOptions);
                console.log(`Email info is ${JSON.stringify(info, null, 2)}`)
                return new Response('Success!', {status: 200});
        
            } catch (error) {
                return new Response('Bad Request', {status: 400});
            }
        } 
        catch(error) {
            console.log(error)
            return new Response('Bad Request', {status: 400});
        }
    }
    else {
        console.log("Visitor Already Here");
        return new Response('User Already Identified', {status: 200});
    }  
}
export async function POST(request) {

    try {
        const messageData = await request.json();

        await fetch(process.env.DISCORD_WEBHOOK, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: `<@${process.env.DISCORD_USERID_CONTACT}> 📧 New message Alert!\n\n\nFrom: ${messageData.name}\n\nMessage: ${messageData.message}\n\n`,
            }),
        });

        return new Response('Success!', {status: 200});

    } catch (error) {
        console.log(error)
        return new Response('Error Sending Message', {status: 400});
    }

}
import nodemailer from "nodemailer";

interface emailFunctionProps {
    email: string;
    html: string;
    subject: string;
    text: string;
}

async function sendEmail(props: emailFunctionProps) {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: import.meta.env.EMAIL,
            pass: import.meta.env.PASSWORD,
        },
    });

    let message = {
        from: import.meta.env.EMAIL,
        to: import.meta.env.EMAIL,
        subject: props.subject,
        text: props.text,
        html: props.html,
    };

    let info = await transporter.sendMail(message);
    console.log("Message sent successfully as %s", info.messageId);

    console.log({ info });
    return info;
}

export { sendEmail };
import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "7a221686ecedf6",
        pass: "d3a2edca220b97"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail ({ subject, body}: SendMailData) {

        await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Henrique Brites <henriquebrites@live.com',
        subject,
        html: body,
    });

    }
}
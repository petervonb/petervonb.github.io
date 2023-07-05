import resend, { Resend } from 'resend';
const resend = new Resend('re_FfNVT9hy_32jkQB4VB4iLF4skWEVPHHGM');

class MailController {


    constructor() {
    }


    static sendEmail(from,first,last, subject, body) {
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "peter.v.b@hotmail.de",
            Password: "re_FfNVT9hy_32jkQB4VB4iLF4skWEVPHHGM",
            To: 'peter.v.b@hotmail.de',
            From: from,
            Subject: subject,
            Body: body
        }).then(
            message => alert(message)
        );
    }


    async sendEmailV2(from,first,last, subject, body) {
        try {
            const data = await resend.emails.send({
                from: from,
                to: ['peter.v.b@hotmail.de'],
                subject: 'Hello World',
                html: '<strong>It works!</strong>'
            });

            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }



}
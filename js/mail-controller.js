class MailController {

    constructor() {
    }


    static sendEmail(from,first,last, subject, body) {
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "peter.v.b@hotmail.de",
            Password: "FB1BE67703A824ED596786F8A676DDEBBA89",
            To: 'p.vonbodelschwingh@student.fontys.nl',
            From: from,
            Subject: subject,
            Body: body
        }).then(
            message => alert(message)
        );
    }
}
import nodemailer from 'nodemailer'
import Handlebars from 'handlebars';
import fs from 'fs'
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export class Mailer {

    static async send(receiver: string, subject: string, emailTemplate: string, data: any = {}) {
    const transporter = nodemailer.createTransport({
        secure: false,
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
        },
    } as SMTPTransport.Options);
    const templateString = fs.readFileSync(process.cwd() + `/src/app/email-templates/${emailTemplate}`, "utf8").toString()
    const template = Handlebars.compile(templateString)
          
    await transporter.sendMail({
        from: process.env.MAIL_USERNAME,
        to: receiver,
        subject: subject,
        html: template(data)
   })
 }
}
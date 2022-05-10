import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../MailAdapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "faad14530716f2",
    pass: "4556757b9f29e9",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData){
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Jeferson Mesquita <je_2742@hotmail.com>",
      subject,
      html: body,
    });
  }
}
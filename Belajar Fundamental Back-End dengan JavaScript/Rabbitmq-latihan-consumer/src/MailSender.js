import nodemailer from 'nodemailer';

class MailSender {
  constructor() {
    this._transporter = nodemailer.createTransport({
      host: process.env.SMPT_HOST,
      port: process.env.SMPT_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });
  }
}

export default MailSender;

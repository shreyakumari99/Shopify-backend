import nodeMailer from "nodemailer";

export const sendEmail = async ({ email, subject, message }) => {
  const transporter = nodeMailer.createTransport({
    service: process.env.SMTP_SERVICE, // e.g., "gmail"
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await transporter.verify(); // helpful for debugging

  await transporter.sendMail({
    from: process.env.SMTP_MAIL,
    to: email,
    subject,
    html: message,
  });
};

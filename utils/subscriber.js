const nodemailer = require("nodemailer");

const subscriber = async (email, subject, data) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "therealbigdeeel@gmail.com",
        pass: "mmazhfocikkdkcsl",
      },
    });

    await transporter.sendMail({
      from: "no-reply lambda",
      to: email,
      subject: subject,
      html: `<body>
      <p>Bonjour 👋,<br><br></p>
      <p>Vous avez un nouvel abonné à votre liste de diffusion :</p>
      <p>${data}</p>
      </body>`,
    });

    console.log("email sent successfully");
  } catch (err) {
    console.log("email not sent" + err);
  }
};

module.exports = subscriber;

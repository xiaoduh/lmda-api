const nodemailer = require("nodemailer");

const appliance = async (subject, email, phone, content) => {
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
      to: "clement.lidar@gmail.com, abidimedamine@gmail.com",
      subject: "Vous avez une nouvelle candidature spontannée 🥳",
      html: `<body>
      <p>Bonjour 👋,<br><br></p>
      <p>Vous avez une nouvelle candidature spontannée :</p>
      <ul>
        <li>Objet: ${subject}</li>
        <li>Email du candidat: ${email}</li>
        <li>Téléphone du candidat: ${phone}</li>
        <li>Message du candidat: ${content}</li>
      </ul>
      <p>Keep pushing ! 💪</p>
      </body>`,
    });

    console.log("email sent successfully");
  } catch (err) {
    console.log("email not sent" + err);
  }
};

module.exports = appliance;

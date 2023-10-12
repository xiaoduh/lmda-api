const nodemailer = require("nodemailer");

const contact = async (profil, subject, email, phone, context) => {
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
      subject: `Vous avez une nouvelle demande d'information pour le profil ${profil} 🥳`,
      html: `<body>
      <p>Bonjour 👋,<br><br></p>
      <p>Vous avez une nouvelle demande d'information pour le profil ${profil} :</p>
      <ul>
        <li>Objet: ${subject}</li>
        <li>Email du demandeur: ${email}</li>
        <li>Téléphone du demandeur: ${phone}</li>
        <li>Message du demandeur: ${context}</li>
      </ul>
      <p>Keep pushing ! 💪</p>
      </body>`,
    });

    console.log("email sent successfully");
  } catch (err) {
    console.log("email not sent" + err);
  }
};

module.exports = contact;

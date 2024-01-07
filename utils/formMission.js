const nodemailer = require("nodemailer");

const formMission = async (subject, email, phone, content) => {
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
      subject: "Vous avez un nouveau besoin 🥳",
      html: `<body>
      <p>Bonjour 👋,<br><br></p>
      <p>Vous avez une nouvelle mission :</p>
      <ul>
        <li>Recherche: ${subject}</li>
        <li>Email du demandeur: ${email}</li>
        <li>Téléphone du demandeur: ${phone}</li>
        <li>Message du demandeur: ${content}</li>
      </ul>
      <p>Keep pushing ! 💪</p>
      </body>`,
    });

    console.log("email sent successfully");
  } catch (err) {
    console.log("email not sent" + err);
  }
};

module.exports = formMission;

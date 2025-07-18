const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); // Serve HTML/CSS/JS files

// Form route
app.post("/send", async (req, res) => {
  console.log("Dados recebidos:", req.body);
  const { name, email, message } = req.body;

  try {
    // Configure email transport (example with Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ghpedroso13@gmail.com",
        pass: "jvsq hifm rcgd owov",
      },
    });

    const mailOptions = {
      from: email,
      to: "ghpedroso13@gmail.com",
      subject: `Message from ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Message sent!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Error sending message." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

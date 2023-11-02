import { MongoClient } from "mongodb";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    MongoClient.connect(
      `mongodb+srv://rafa:<password>@cluster0.oinetw9.mongodb.net/`
    );

    console.log(email);
    res.status(201).json({ message: "Signed up successfully" });
  }
}

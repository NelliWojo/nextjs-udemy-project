export default function handler(req, res) {
  const eventId = req.query.id;

  if (req.method === "POST") {
    const { name, email, feedback } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !feedback ||
      feedback.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }
    // console.log(name, email, feedback);
    const newComment = { id: new Date().toISOString(), name, email, feedback };

    res.status(201).json({ message: "Comment created", comment: newComment });
    console.log(newComment);
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "Max", feedback: "1st comment" },
      { id: "c2", name: "Steeve", feedback: "2nd comment" },
    ];

    res.json(200).json({ comments: dummyList });
  }
}

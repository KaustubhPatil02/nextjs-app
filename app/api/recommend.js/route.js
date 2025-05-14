export default async function handler(req, res) {
  const { topic } = req.body;
  res.json({ recommendations: [`Try ${topic}`, `Read more about ${topic}`, `Explore ${topic} tools`] });
}

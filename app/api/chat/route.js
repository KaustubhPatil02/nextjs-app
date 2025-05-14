import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  const { message } = await request.json();

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    });

    return Response.json({ reply: completion.choices[0].message.content });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
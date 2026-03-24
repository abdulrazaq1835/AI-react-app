import axios from "axios";

const askAi = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt || prompt.trim() === "") {
    return res.status(400).json({ error: "Prompt is empty" });
  }
  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openrouter/auto",
        messages: [{ role: "user", content: prompt }],
      },

        {
        headers: {
          'Authorization': `Bearer ${process.env.API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    )

  const answer = response.data.choices[0].message.content
  console.log(answer)
    res.status(200).json({ answer })

  } catch (error) {
res.status(500).json({ error: 'response error from AI' })
    console.log(error)
  }
};

export default askAi
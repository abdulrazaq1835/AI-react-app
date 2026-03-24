import Aimodel from "../models/aimodel.js";

export const saveRespond = async (req, res) => {
  const { prompt, response } = req.body;

  if (!prompt || !response) {
    return res.status(400).json({ error: "prompt or response is empty" });
  }

  try {
    const interaction = new Aimodel({
      prompt,
      response,
      status: "success",
    })

    await interaction.save()
    res.status(201).json({ message: 'Saved!', data: interaction })

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'error in saved' })
  }
};


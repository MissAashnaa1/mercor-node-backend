const axios = require("axios");
const pdfExtractorFunction = require("./pdfExtractor");
const { response } = require("express");

async function generateQuestions() {
  const text = await pdfExtractorFunction();
  // const prompt = `Ask a question about the following passage:\n"${text}"`;
  const prompt = `Ask a question about the following passage:\n"JavaScript is a scripting language used to create and control dynamic website content, i.e. anything that moves, refreshes, or otherwise changes on your screen without requiring you to manually reload a web page. Features like: animated graphics, photo slideshows, autocomplete text suggestions, interactive forms, An even better way of understanding what JavaScript does is to think about certain web features you use every day and likely take for granted—like when your Facebook timeline automatically updates on your screen or Google suggests search terms based on a few letters you've started typing. In both cases, that's JavaScript in action.The results of JavaScript may seem simple, but there's a reason why we teach an entire segment on JavaScript in both our Front End Web Developer and Break into Tech Blueprints. Underneath all those great animations and autocompletes—there's some pretty fascinating stuff happening. This guide will break down exactly how JavaScript works and why and how to use it, plus the best ways to learn JavaScript if you're realizing you need it in your skillset."`;
  const apiKey = process.env.OPENAI_API_KEY;
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci-codex/completions",
      {
        engine: "davinci",
        prompt,
        max_tokens: 300, // Adjust as needed
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const generatedQuestion = response.data.choices[0].text.trim();
    return response;
  } catch (error) {
    // console.error("Error:", error);
    console.log("Error:");
    return error;
  }
}

module.exports = generateQuestions;

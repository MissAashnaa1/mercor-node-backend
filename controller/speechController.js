const textToSpeech = require("@google-cloud/text-to-speech");
const fs = require("fs");

const client = new textToSpeech.TextToSpeechClient();

const textToSpeechFunc = async (req, res) => {
  const text = "hello, world!";

  // Construct the request
  const request = {
    input: { text: text },
    // Select the language and SSML voice gender (optional)
    voice: { languageCode: "en-US", ssmlGender: "NEUTRAL" },
    // select the type of audio encoding
    audioConfig: { audioEncoding: "MP3" },
  };

  // Performs the text-to-speech request
  const [response] = await client.synthesizeSpeech(request);
  res.json({ success: true, response: response });
};

module.exports = { textToSpeechFunc };

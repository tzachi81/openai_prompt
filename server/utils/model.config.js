const { OpenAI } = require("@langchain/openai");

const model = new OpenAI({ 
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0,
  model: 'gpt-3.5-turbo'
});

module.exports = { model };
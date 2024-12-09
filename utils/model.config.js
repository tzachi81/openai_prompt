const { PromptTemplate } = require("@langchain/core/prompts");
const { StructuredOutputParser } = require("langchain/output_parsers");
const { OpenAI } = require("@langchain/openai");

const model = new OpenAI({ 
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0,
  model: 'gpt-3.5-turbo'
});

const parser = StructuredOutputParser.fromNamesAndDescriptions({
  code: "JavaScript code that answers the user's question",
  explanation: "detailed explanation of the example code provided"
});

const formatInstructions = parser.getFormatInstructions();

// Instantiation of a new object called "prompt" using the "PromptTemplate" class
const prompt = new PromptTemplate({
  template: "You are a programming expert and will answer the user’s coding questions as thoroughly as possible using JavaScript. If the question is unrelated to coding, do not answer.\n{format_instructions}\n{question}",
  inputVariables: ["question"],
  partialVariables: { format_instructions: formatInstructions }
});

module.exports = {model, parser, prompt};
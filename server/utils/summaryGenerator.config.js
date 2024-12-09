const { PromptTemplate } = require("@langchain/core/prompts");
const { StructuredOutputParser } = require("langchain/output_parsers");


const parser = StructuredOutputParser.fromNamesAndDescriptions({
  question: "Summary of a given text",
  explanation: "Summarizes a given text."
});

const formatInstructions = parser.getFormatInstructions();

// Instantiation of a new object called "prompt" using the "PromptTemplate" class
const prompt = new PromptTemplate({
  template: "You are a summary generator and will summarize a given text to a single paragraph. If the text was not provided, prompt the user to input text. return as a JSON object.\n{format_instructions}\n{question}",
  inputVariables: ["question"],
  partialVariables: { format_instructions: formatInstructions }
});

module.exports = { parser, prompt};
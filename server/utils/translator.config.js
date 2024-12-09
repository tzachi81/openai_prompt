const { PromptTemplate } = require("@langchain/core/prompts");
const { StructuredOutputParser } = require("langchain/output_parsers");


const parser = StructuredOutputParser.fromNamesAndDescriptions({
  question: "Text translator for given user's text",
  explanation: "Translates a given text to a required language provided by the user."
});

const formatInstructions = parser.getFormatInstructions();

// Instantiation of a new object called "prompt" using the "PromptTemplate" class
const prompt = new PromptTemplate({
  template: "You are an automatic translator and will translate any text given by the user to a target language provided by the user. If the target language was not provided, prompt the user to choose a target language.\n{format_instructions}\n{question}",
  inputVariables: ["question"],
  partialVariables: { format_instructions: formatInstructions }
});

module.exports = { parser, prompt};
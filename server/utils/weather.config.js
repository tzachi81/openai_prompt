const { PromptTemplate } = require("@langchain/core/prompts");
const { StructuredOutputParser } = require("langchain/output_parsers");


const parser = StructuredOutputParser.fromNamesAndDescriptions({
  location: 'Name of location',
  temprature: 'Current temprature in Celsius',
  condition: 'Description of the weather condition. (e.g., sunny, rainy, cloudy)'
});

const formatInstructions = parser.getFormatInstructions();

// Instantiation of a new object called "prompt" using the "PromptTemplate" class
const prompt = new PromptTemplate({
  template: `You are a weather assistant. Provide the weather forecast for the following location:\n
              Location: {location}\n
              Current Temperature: {temperature}°C\n
              Weather Condition: {condition}\n
              {format_instructions}`,
  inputVariables: ["location", "temperature", "condition"],
  partialVariables: { format_instructions: formatInstructions }
});

module.exports = { parser, prompt };
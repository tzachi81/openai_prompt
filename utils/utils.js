const { model, prompt, parser } = require('./model.config');

const promptFunc = async (input) => {
  
  try {
    // Format the prompt with the user input
    const promptInput = await prompt.format({
      question: input
    });

    // Call the model with the formatted prompt
    const res = await model.invoke(promptInput);
    
    // For a non-coding question, the model returns an error message, causing parse() to throw an exception.
    // In this case, simply return the error message instead of the parsed results.
    try { 
      const parsedResult = await parser.parse(res);
      return parsedResult;
    } catch (e) { 
      return res;
    }
  }
  catch (err) {
    console.error(err);
    throw(err);
  }
};

module.exports = { promptFunc };
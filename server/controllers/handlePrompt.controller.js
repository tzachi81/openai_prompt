const { promptFunc } = require('../utils');

const handlePrompt = parser => {
  return async (req, res) => {
    try {
      const userQuestion = req.body.question;

      if (!userQuestion) {
        return res.status(400).json({ error: 'Please provide a question in the request body.' });
      }

      const result = await promptFunc(userQuestion, parser);
      res.json({ result });
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
};

module.exports = { handlePrompt };
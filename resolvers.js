const crypto = require('crypto');

const { GoogleGenerativeAI } = require("@google/generative-ai"); // Gemini
const OpenAI = require('openai'); // ChatGPT
const { Anthropic } = require("@anthropic-ai/sdk"); // Claude

const resolvers = {
  Query: {
    gemini: async (_, { payload }, context) => {
      const { apiKey, model, prompt, isEncrypted } = payload;
      const gemini = new GoogleGenerativeAI(isEncrypted ? decryptData(apiKey, context.privateKey) : apiKey);
      const result = await gemini.getGenerativeModel({ model })?.generateContent(prompt);
      return await result?.response?.text();
    },
    chatgpt: async (_, { payload }, context) => {
      const { apiKey, model, prompt, isEncrypted } = payload;
      const chatgpt = new OpenAI({ apiKey: isEncrypted ? decryptData(apiKey, context.privateKey) : apiKey });
      return await chatgpt?.chat?.completions?.create({
        model,
        messages: [{ role: 'user', content: prompt }]
      })?.data?.choices?.[0]?.text;
    },
    claude: async (_, { payload }, context) => {
      const { apiKey, model, prompt, isEncrypted } = payload;
      const client = new Anthropic({ apiKey: isEncrypted ? decryptData(apiKey, context.privateKey) : apiKey });
      return await client?.messages?.create({
        model,
        messages: [{ role: 'user', content: prompt }]
      })?.content;
    }
  }
};

function decryptData(encryptedData, privateKey) {
  return crypto.privateDecrypt(
      {
          key: privateKey,
          padding: crypto.constants.RSA_PKCS1_PADDING
      },
      Buffer.from(encryptedData, 'base64')
  ).toString('base64');
}

module.exports = resolvers;
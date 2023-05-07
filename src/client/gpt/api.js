import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

const gptResponse = async (messages) => {
  try {
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages,
      max_tokens: 3000,
    });

    const response = completion.data.choices[0].message.content;

    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export default gptResponse;

import gptResponse from './api';
import { language_translation_gpt } from './promptEngine';

const promptMap = {
  LANGUAGE_TRANSLATION_GPT: language_translation_gpt,
};

const gptCall = async (promptKey, promptOptions) => {
  const promptFunction = promptMap[promptKey];
  const { persona, prompt } = await promptFunction(promptOptions);

  const messages = [
    { role: 'system', content: persona },
    { role: 'user', content: prompt },
  ];

  const response = await gptResponse(messages);

  return response;
};

export default gptCall;

const language_translation_gpt = ({ language, content }) => {
  const persona = `You are very good language translator. Your job is to translate the ${content} into the specified language ${language}`;

  const prompt = `Message = "${content}"

  Don't mention any unnecessary information in the translation.
  If in case you couldn't able to understand the  content then, kindly inform the user that their content is non understandable in the specific language.
  Please note that response should only contains the translated content`;
  
  return { persona, prompt };
};

export { language_translation_gpt };

import React, { useState } from 'react';
import gptCall from '../client/gpt';


function Form() {
  const [text, setText] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const apiResponse = await gptCall('LANGUAGE_TRANSLATION_GPT',{
        language: 'tamil',
        content: text,
      });
    setResponse(apiResponse);
    console.log("response",apiResponse);
  }

  const handleChange = (event) => {
    setText(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter text:
        <input type="text" value={text} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
      <p>{response}</p>
    </form>
  );
}
export default Form;
import React, { useState } from "react";
import gptCall from "../client/gpt";
import "../App.css";

function Form() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const apiResponse = await gptCall("LANGUAGE_TRANSLATION_GPT", {
      language: "tamil",
      content: text,
    });
    setResponse(apiResponse);
    console.log("response", apiResponse);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div class="input-container">
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <label for="input-1">Input 1</label>
      <textarea
        id="input-1"
        value={text}
        onChange={handleTextChange}
      ></textarea>

      <button type="submit">Submit</button>

      <label for="input-2">Input 2</label>
      <textarea id="input-2"></textarea>
    </div>
  );
}
export default Form;

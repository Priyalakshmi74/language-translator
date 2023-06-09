import React, { useState } from "react";
import Select from "react-select";
import gptCall from "../client/gpt";
import { ReactComponent as ReactLogo } from "./undraw_chat_re_re1u.svg";

const options = [
  { value: "af", label: "Afrikaans" },
  { value: "ar", label: "Arabic" },
  { value: "az", label: "Azerbaijani" },
  { value: "bn", label: "Bengali" },
  { value: "bs", label: "Bosnian" },
  { value: "bg", label: "Bulgarian" },
  { value: "ca", label: "Catalan" },
  { value: "ceb", label: "Cebuano" },
  { value: "ny", label: "Chichewa" },
  { value: "zh-CN", label: "Chinese (Simplified)" },
  { value: "zh-TW", label: "Chinese (Traditional)" },
  { value: "co", label: "Corsican" },
  { value: "hr", label: "Croatian" },
  { value: "cs", label: "Czech" },
  { value: "da", label: "Danish" },
  { value: "nl", label: "Dutch" },
  { value: "en", label: "English" },
  { value: "eo", label: "Esperanto" },
  { value: "et", label: "Estonian" },
  { value: "tl", label: "Filipino" },
  { value: "fi", label: "Finnish" },
  { value: "fr", label: "French" },
  { value: "fy", label: "Frisian" },
  { value: "gl", label: "Galician" },
  { value: "ka", label: "Georgian" },
  { value: "de", label: "German" },
  { value: "el", label: "Greek" },
  { value: "gu", label: "Gujarati" },
  { value: "ht", label: "Haitian Creole" },
  { value: "ha", label: "Hausa" },
  { value: "haw", label: "Hawaiian" },
  { value: "he", label: "Hebrew" },
  { value: "hi", label: "Hindi" },
  { value: "hmn", label: "Hmong" },
  { value: "hu", label: "Hungarian" },
  { value: "is", label: "Icelandic" },
  { value: "ig", label: "Igbo" },
  { value: "id", label: "Indonesian" },
  { value: "ga", label: "Irish" },
  { value: "it", label: "Italian" },
  { value: "ja", label: "Japanese" },
  { value: "jw", label: "Javanese" },
  { value: "kn", label: "Kannada" },
  { value: "kk", label: "Kazakh" },
  { value: "km", label: "Khmer" },
  { value: "rw", label: "Kinyarwanda" },
  { value: "ko", label: "Korean" },
  { value: "ku", label: "Kurdish (Kurmanji)" },
  { value: "ky", label: "Kyrgyz" },
  { value: "", label: "Latin" },
  { value: "", label: "Malayalam" },
  { value: "", label: "Punjabi" },
  { value: "", label: "Spanish" },
  { value: "", label: "Swedish" },
  { value: "", label: "Tamil" },
  { value: "", label: "Telugu" },
  { value: "", label: "Thai" },
  { value: "", label: "Urdu" },
];

function MyTranslator() {
  const [selectedSourceLanguage, setSelectedSourceLanguage] = useState(null);
  const [selectedTargetLanguage, setSelectedTargetLanguage] = useState(null);
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleSourceLanguageChange = (selectedOption) => {
    setSelectedSourceLanguage(selectedOption);
  };

  const handleTargetLanguageChange = (selectedOption) => {
    setSelectedTargetLanguage(selectedOption);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleTranslate = async () => {
    const apiResponse = await gptCall("LANGUAGE_TRANSLATION_GPT", {
      language: selectedTargetLanguage.label,
      content: inputText,
    });
    setOutputText(apiResponse);
  };

  return (
    <div
      className="App"
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      
      <h1 style={{ color: "#f286bb", marginBottom: "2rem", marginTop: "2px" }}>
        Language Translator
      </h1>
      <Select
        placeholder="Select target language"
        options={options}
        value={selectedTargetLanguage}
        onChange={handleTargetLanguageChange}
      />
      <br />
      <div style={{ position: "relative" }}>
        <textarea
          placeholder="Enter text.."
          rows="10"
          cols="50"
          value={inputText}
          onChange={handleInputChange}
          style={{
            backgroundColor: "#edeff5",
            color: "#000",
            width: "100%",
            marginRight: "1rem",
            marginLeft: "1rem",
            padding: "1rem",
            borderRadius: "1rem",
            border: "none",
            outline: "none",
            resize: "none",
            height: "10rem",
            width: "50rem",
          }}
        >
          {inputText && (
            <button
              style={{
                position: "absolute",
                top: "0",
                // right: "18px",
                cursor: "pointer",
                border: "none",
                background: "transparent",
                color: "black",
                fontSize: "300px",
                zIndex: "1", // Increase the z-index value to make sure it appears on top
              }}
              onClick={() => setInputText("")}
            >
              &times;
            </button>
          )}
        </textarea>
      </div>
      <br />
      <button style={{ backgroundColor: "#47A1ADCC", paddingLeft:'20px',paddingRight:'20px',paddingTop:'0.5rem',paddingBottom:'0.5rem',borderRadius:'0.5rem'}} onClick={handleTranslate}>Translate</button>
      <br />
      <div style={{ position: "relative" }}>
        <textarea
          placeholder="Translation.."
          rows="10"
          cols="50"
          value={outputText}
          style={{
            backgroundColor: "#edeff5",
            color: "#000",
            width: "100%",
            marginLeft: "1rem",
            marginRight: "1rem",
            padding: "1rem",
            borderRadius: "1rem",
            border: "none",
            outline: "none",
            resize: "none",
            height: "10rem",
            width: "50rem",
          }}
          readOnly
        />
        {outputText && (
          <button
            style={{
              position: "absolute",
              top: "0",
              right: "18px",
              cursor: "pointer",
              border: "none",
              background: "transparent",
              color: "black",
              fontSize: "30px",
              zIndex: "1",
            }}
            onClick={() => setOutputText("")}
          >
            &times;
          </button>
        )}
      </div>
    </div>
  );
}

export default MyTranslator;

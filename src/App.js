import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const emojiDictionary = {
    "😁": "Beaming",
    "🤩": "Star Struck",
    "😗": "Kissing",
    "😳": "Disbelief",
    "😔": "Sad",
    "🥡": "Takeout box",
    "❤️": "Love",
    "😀": "Grinning",
    "😃": "Smiley",
    "😄": "Smile",
    "😆": "Laughing",
    "🤣": "ROFL",
    "😉": "Wink",
    "😊": "Blush",
    "😐": "Neutral",
    "😑": "Expressionless",
    "🤔": "Thinking",
    "🤫": "Shushing",
    "🤗": "Hugging",
    "🤐": "Mouth Zip",
    "😏": "Smirk",
    "😒": "Unamused",
    "🤥": "Lying Face",
    "😌": "Relieved",
    "😪": "Sleepy",
    "😴": "Sleeping",
    "😷": "Face Mask",
    "🤢": "Nauseating",
    "🤧": "Sneezing"
  };
  const emojis = Object.keys(emojiDictionary);
  const [emoji, setEmoji] = useState(""); /** concept 2 is useState */
  const [meaning, setMeaning] = useState("translation will appear here..");
  const displayEmojis = emojis.map((emoji) => (
    <span
      className="emoji"
      onClick={() => emojiClickHandler(emoji)}
      style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
    >
      {" "}
      {emoji}{" "}
    </span>
  ));

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <h2>"Smileys and people Emoji meaning"</h2>

      <input
        className="input"
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />

      <h3> {meaning} </h3>
      <h4>Emoji's we interprete</h4>
      <div className="emojisContainer">{displayEmojis}</div>
    </div>
  );
}

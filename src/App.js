import React,{useState} from "react";
import "./styles.css";


var emojiDictionary={
"😂":"Joy",
"🙂":	"smiling",
"🙃":"silly",
"😉":"Winky face"
};

var emojisWeKnow=Object.keys(emojiDictionary);


export default function App() {
  const[meaning,setMeaning]=useState(" ");

  function emojiInputHandler(emoji){
  var userInput=event.target.value;
  var meaning=emojiDictionary[userInput];
  setMeaning(meaning);
  }

  function emojiClickHandler(emoji){
    var meaning=emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter!!</h1>
      <input onChange={emojiInputHandler}></input>
     
      <h2>{meaning}</h2>

<h3>Emojis We Know</h3>
{emojisWeKnow.map(Function(emoji){
  return(
    <span
    onClick={()=>emojiClickHandler(emoji)}
    style={{fontsize:"2 rem",padding:"1 rem",cursor:"pointer"}}
    key={emoji}
</span>
  );
})};
</div>
  );
}







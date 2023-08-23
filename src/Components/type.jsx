import React from "react";
import Typewriter from "typewriter-effect";
import "./type.css"; // Import the CSS file for styling

function Type() {
  return (
    <div className="typewriter-container">
      <Typewriter 
        options={{
          strings: [
            "Are you not sure what career path is suitable?",
            "Your CV got rejected? Are you nervous at interviews?",
          
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;

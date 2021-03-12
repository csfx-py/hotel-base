import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

var style = document.createElement("style");
style.innerHTML = `
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}
::-webkit-scrollbar {
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #2f3136;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #7289da;
  border-radius: 10px;
}
`;
document.head.appendChild(style);
// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
const root = document.createElement("div");

root.id = "root";
root.setAttribute("style", "display: flex; height: 100vh; width: 100vw");
document.body.appendChild(root);

// Now we can render our application into it
ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDom from "react-dom";
import { GlobalStyles } from "./global-styles";
import { App } from "./App";
import { FirebaseContext } from "./context/firebase";

const config = {
  apiKey: "AIzaSyAR4jHTG8-3PI53nuOb85k7fN_SgK-0Op8",
  authDomain: "actions-louder-than-emojis.firebaseapp.com",
  databaseURL: "https://actions-louder-than-emojis.firebaseio.com",
  projectId: "actions-louder-than-emojis",
  storageBucket: "actions-louder-than-emojis.appspot.com",
  messagingSenderId: "490570570237",
  appId: "1:490570570237:web:33592bba84ba0b14726194",
  measurementId: "G-BG8G0EN9ST"
};

window.firebase.initializeApp(config);

ReactDom.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);

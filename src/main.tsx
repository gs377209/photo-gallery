import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { defineCustomElements } from "@ionic/pwa-elements/loader";

// Call the element loader before the render call
defineCustomElements(window);

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Used to log a11y issues
// axe
//   .run()
//   .then((results) => {
//     if (results.violations.length) {
//       console.error("Accessibility issues found:");
//       console.error(results.violations);
//     }
//   })
//   .catch((err) => {
//     console.error("Something bad happened:", err.message);
//   });

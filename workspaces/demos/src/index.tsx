import React from 'react';
import * as ReactDOM from "react-dom/client";
import { Calendar } from 'react-calendar-panel';

const App = () => (
  <div>
    <h1>React Calendar Panel Demos</h1>
    <Calendar /> {/* If the component is added, it doesn't work. It appears a blank screen. Removing the component makes the build work. */}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);


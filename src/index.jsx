import React from "react";
import ReactDOMClient from "react-dom/client";
import { YadeckComByHtml } from "./screens/YadeckComByHtml";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<YadeckComByHtml />);

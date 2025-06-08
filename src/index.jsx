import React from "react";
import ReactDOMClient from "react-dom/client";
import { RhymeChainComByHtml } from "./screens/RhymeChainComByHtml";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<RhymeChainComByHtml />);

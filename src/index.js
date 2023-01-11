// src/index.js

import React from "react"
import { createRoot } from "react-dom/client";
import App from "./app";
import 'antd/dist/reset.css';
import './index.css'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
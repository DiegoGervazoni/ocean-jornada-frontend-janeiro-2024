import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React.StrictMode é um componente especial que faz parte do React e que ajuda a identificar problemas em uma aplicação. Ele não renderiza nada visível para o usuário, mas envolve os componentes filhos e verifica se eles estão seguindo as melhores práticas de desenvolvimento.

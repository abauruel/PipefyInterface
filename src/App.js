import React from "react";
import { DndProvider } from "react-dnd";
import HTLM5Backend from "react-dnd-html5-backend";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  return (
    <DndProvider backend={HTLM5Backend}>
      <GlobalStyle />
      <Header />
      <Board />
    </DndProvider>
  );
}

export default App;

import React from 'react';
import './App.css';
import AlpacaPreview from "./components/alpacaPreview/alpacaPreview";
import AlpacaProvider from "./alpacaProvider";
import AlpacaPreviewMenu from "./components/alpacaPreviewMenu/alpacaPreviewMenu";
import Menu from "./components/alpacaChoiceMenu/menu";

function App() {
  return (
    <div className="app-container">
        <AlpacaProvider>
            <div className={"alpaca-preview-container"}>
                <AlpacaPreview/>
                <AlpacaPreviewMenu/>
            </div>
            <div className={"menu-container"}>
                <Menu/>
            </div>
        </AlpacaProvider>
    </div>
  );
}

export default App;

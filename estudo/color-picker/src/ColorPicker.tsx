import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  function updateTextColor(selectedColor: String) {
    const title = document.getElementById("corSelecionada");
    if (selectedColor === "#000000") {
      title?.classList.add("p-white");
    } else {
      title?.classList.remove("p-white");
    }
  }

  function handleColorChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedColor = event.target.value;
    setColor(selectedColor);
    updateTextColor(selectedColor);
  }

  return (
    <div className="color-picker-container">
      <h1>Seletor de Cores</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p id="corSelecionada">Cor Selecionada: {color}</p>
      </div>
      <label>Selecione uma cor:</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  );
}

export default ColorPicker;

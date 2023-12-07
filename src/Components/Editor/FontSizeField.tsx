import React, { useState } from 'react'
import topPanelStyles from '../Top-panel.module.css'

const FontSizeField = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('14');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value:string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const fontSizeOptions = ['12', '14', '16', '18']; // Ваши варианты размеров шрифта

  return (
    <div>
      <input className={topPanelStyles.fontSizeField}
        type="text"
        value={selectedValue}
        onClick={toggleDropdown}
        readOnly // Запрещаем редактирование ввода напрямую
      />
      {isOpen && (
        <div className={topPanelStyles.dropdownMenu}>
          {fontSizeOptions.map((option) => (
            <div key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default FontSizeField

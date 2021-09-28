import React from "react";
import "./combobox.css";
const ComboBox = ({selectedValue}) => {
  return (
    <div className="combobox">
      <select  onChange={selectedValue}>
        <option value="" selected disabled hidden>Choose Category</option>
        <option value="ecommerce">ECommerce</option>
        <option value="entertainment">Entertainment</option>

      </select>
    </div>
  );
};

export default ComboBox;

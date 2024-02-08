import React from "react";

function InputGetter({ type, text, onChange, title }) {
  return (
    
    <div className="input-group mb-3">
      <input
        type={type}
        className="form-control loginInput"
        placeholder={text}
        aria-label={text}
        title={title}
        aria-describedby="basic-addon1"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default InputGetter;

import React from "react";

const InputFormat = ({
  InputClassName,
  TextType,
  NameOfInput,
  OnPlaceHolder,
  AutoOption,
  OnChangingInputs,
  ValueOfInput,
  AcceptAttr,
  RefValue,
}) => {
  return (
    <input
      className={InputClassName}
      type={TextType}
      name={NameOfInput}
      placeholder={OnPlaceHolder}
      autoComplete={AutoOption}
      onChange={OnChangingInputs}
      value={ValueOfInput}
      accept={AcceptAttr}
      ref={RefValue}
    />
  );
};

export default InputFormat;

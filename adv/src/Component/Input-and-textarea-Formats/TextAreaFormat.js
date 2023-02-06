import React from "react";

const TextAreaFormat = ({
  InputClassName,
  TextType,
  NameOfInput,
  OnPlaceHolder,
  AutoOption,
  RowsOfInput,
  ColumnOfInput,
  OnChangingInputs,
  ValueOfInput,
}) => {
  return (
    <textarea
      className={InputClassName}
      type={TextType}
      placeholder={OnPlaceHolder}
      name={NameOfInput}
      rows={RowsOfInput}
      column={ColumnOfInput}
      autoComplete={AutoOption}
      value={ValueOfInput}
      onChange={OnChangingInputs}
    />
  );
};

export default TextAreaFormat;

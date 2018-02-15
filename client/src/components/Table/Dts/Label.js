import React from 'react';

const textToColorDict = {
  "Success": "green",
  "Not Started": "blue",
  "Interrupted": "brown"
}

const Label = ({className, borderRadius, width}) => (text) => {
  return (
    <span className={className} style={{backgroundColor: textToColorDict[text] , borderRadius, width, display: "inline-block"}}>
        {text}
    </span>
  );
};

export default Label;

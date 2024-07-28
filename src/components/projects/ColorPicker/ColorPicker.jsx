import { useEffect, useState } from "react";
import Form from "./component/Form";
import SingleColor from "./component/SingleColor";
import Values from "values.js";
import ColorList from "./component/ColorList";
import CopyALert from "./component/CopyALert";

const ColorPicker = () => {
  const [color, setColor] = useState(new Values("#f15025").all(10));
  const [progValue, setProgValue] = useState(0);
  const [copiedColor, setCopiedColor] = useState(null);
  // const [copiedColor, setCopiedColor] = useState("ffffff");
  const [isColorCopied, setIsColorCopied] = useState(false);
  // const [isColorCopied, setIsColorCopied] = useState(true);

  const addColor = (selectedColor) => {
    const colors = new Values(selectedColor).all(10);

    setColor(colors);
  };
  const timer = 500;
  // console.log(colors.all(10));
  const copyColor = (currentColor) => {
    navigator.clipboard.writeText(`#${currentColor}`);
    setCopiedColor(currentColor);
    setIsColorCopied(true);
    progressbarValue(progValue);
    setTimeout(() => {
      setIsColorCopied(false);
    }, timer);
  };
  const progressbarValue = () => {
    let counter = setInterval(() => {
      setProgValue((oldValue) => {
        const currentValue = oldValue + 1;
        console.log(currentValue);
        if (currentValue === 100) {
          setProgValue(0);
          clearInterval(counter);
        }
        return currentValue;
      });

      // console.log(progValue);
    }, timer / 100);
  };
  // useEffect(() => {
  //   let sliderId = setTimeout(() => {
  //     console.log("hello");
  //   }, 2000);
  //   return () => {
  //     clearInterval(sliderId);
  //   };
  // }, []);
  const copyModal = () => {
    console.log();
  };
  return (
    <section className="pt-16 relative">
      {isColorCopied && (
        <CopyALert copiedColor={copiedColor} progValue={progValue} />
      )}
      <Form addColor={addColor} />
      <ColorList color={color} copyColor={copyColor} />
    </section>
  );
};
export default ColorPicker;

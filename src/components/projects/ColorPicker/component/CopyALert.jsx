import { useEffect } from "react";

const CopyALert = ({ copiedColor, progValue }) => {
  //   console.log(copyModal);
  return (
    <article className="fixed top-0 left-1/2 -translate-x-2/4 translate-y-1/8 bg-white drop-shadow-2x z-10">
      <p className="text-center uppercase m-0">#{copiedColor}</p>
      <progress
        value={progValue}
        max="100"
        className="progress-bar h-2 "
      ></progress>
      <p className="text-center capitalize m-0 text-blue-600">copied</p>
    </article>
  );
};
export default CopyALert;

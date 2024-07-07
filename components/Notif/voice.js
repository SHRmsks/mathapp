import Button from "@mui/material/Button";
import { useState } from "react";
function AudioPermission({ status }) {
  const [showPrompt, setShowPrompt] = useState(false);
  const [showRequest, setShowRequest] = useState(true);
  const [understand, setUnderstand] = useState(false);

  const understandHandler = () => {
    setUnderstand(true);
  };
  const AllowHandler = () => {
    setShowPrompt(true);
  };
  const RequestHandler = () => {
    setShowRequest(false);
  };
  const prompt = (
    <div>
      <h1 className="text-center ">To Allow Sounds, Please: </h1>
      <div className="flex justify-center ">
        <ol>
          <li>Click on the lock icon next to the URL in your browser.</li>
          <li>Select &quot;Site settings&quot; from the menu.</li>
          <li>Find &quot;Sound&quot; and set it to &quot;Allow&quot;.</li>
        </ol>
      </div>
      <div className="flex justify-center content-center">
        <Button onClick={understandHandler}>Understood</Button>
      </div>
    </div>
  );

  if (status === "NotAllowedError" && showRequest && !showPrompt && !understand) {
    return (
      <div
        className="grid grid-rows-2 grid-cols-1 grid-flow-row gap-[5px] max-h-[150px] 2xl:max-w-[400px] xl:max-w-[350px] lg:max-w-[150px] 
        md:max-w-[100px] sm: max-w-[75px] min-w-[50px]"
      >
        <h1 className="text-center">MathAPP wants to enable audio for best experience</h1>
        <div className="flex justify-center">
          <Button onClick={AllowHandler}>Allow</Button>
          <Button onClick={RequestHandler}>Deny</Button>
        </div>
      </div>
    );
  } else if (status === "NotAllowedError" && showRequest && showPrompt && !understand) {
    return (
      <div
        className="flex justify-center max-h-[150px] 2xl:max-w-[400px] xl:max-w-[350px] lg:max-w-[150px] 
        md:max-w-[100px] sm: max-w-[75px] min-w-[50px]"
      >
        {prompt}
      </div>
    );
  } else {
    return null;
  }
}
export default AudioPermission;

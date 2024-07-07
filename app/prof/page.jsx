"use client";
import "../tailwind.css";
import "mathlive";
import { useState, useEffect, useRef, useMemo } from "react";
import { ComputeEngine } from "@cortex-js/compute-engine";
import { MathfieldElement } from "mathlive";
import Button from "@mui/material/Button";
import Navi from "../../components/navigator/nav.js";

function PlayGround() {
  const ce = new ComputeEngine();

  const [input, setInput] = useState("");
  const [parsedInput, setParsedInput] = useState(null);
  const mathfield = useRef(null);
  const valueHandler = (e) => {
    setInput(e.target.value);
    try {
      setParsedInput(ce.parse(e.target.value).json);
    } catch (e) {
      console.log("error with ", e);
      setParsedInput(null);
    }
  };
  const jsonformat = useMemo(() => (parsedInput !== null ? JSON.stringify(parsedInput) : {}), [parsedInput]);

  useEffect(() => {
    if (MathfieldElement.keybindings && Array.isArray(MathfieldElement.keybindings)) {
      MathfieldElement.keybindings = [
        ...MathfieldElement.keybindings,
        {
          key: "Ctrl Cmd G", // Correctly specify the key combination
          ifMode: "math",
          command: ({ mathfield }) => mathfield.switchMode("text"), // Use a function to execute the command
        },
        {
          key: "Ctrl Cmd G",
          ifMode: "text",
          command: ({ mathfield }) => mathfield.switchMode("math"), // Use a function to execute the command
        },
      ];
    }
    mathfield.current.focus();
    if (mathfield.current) {
      mathfield.current.addEventListener("input", valueHandler);
    }
    console.log(jsonformat);
    return () => {
      if (mathfield.current) {
        mathfield.current.removeEventListener("input", valueHandler);
      }
    };
  }, [input, parsedInput]);

  return (
    <>
    <Navi/>
    <div
      className="grid max-grid-cols-1 gap-y-[4vh] 2xl:max-w-[30vw] xl:max-w-[35vw] lg:max-w-[40vw] 
        md:max-w-[40vw] sm: max-w-[50vw] min-w-[10vw]"
    >
      <label className="text-center" id="Question">
        Your Question:{" "}
      </label>
      <math-field ref={mathfield} math-virtual-policy="auto" placeholder="Your expression here"></math-field>

      {/* <p>value :{JSON.stringify(parsedInput)}</p> */}
      <div className="flex justify-center">
        <Button variant="contained">Submit</Button>
      </div>
    </div>
    </>
  );
}

export default PlayGround;

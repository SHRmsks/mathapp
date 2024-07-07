"use client";
import "../../app/tailwind.css";
import Button from "@mui/material/Button";
import TimebasedTheme from "./timechecker.js";
function Link(props) {
  return (
    <Button className="max-w-[10vw]" color="secondary" size="medium" variant="text" href={props.href}>
      {" "}
      {props.name}
    </Button>
  );
}

function Navi() {
  const links = [
    { href: "/About", name: "About" },
    { href: "/login", name: "Login" },
  ]; // formats
  return (
    <TimebasedTheme>
      <div className="after:: flex relative max-w-[100vw] gap-x-[3vw] flex-wrap flex-row-reverse bg-gradient-to-r from-[#816bd1] to-[#4d17e3] -z-2">{links.map((props) => Link(props))}</div>
    </TimebasedTheme>
  );
}
export default Navi;

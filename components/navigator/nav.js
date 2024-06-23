"use client";
import "../../app/tailwind.css";
import Button from "@mui/material/Button";
function Link(props) {
  return <Button onClick={() => (window.location.href = props.href)}> {props.name}</Button>;
}

function Navi() {
  const links = [
    { href: "/login", name: "Login" },
    { href: "/About", name: "About" },
  ]; // formats
  return <div className="grid max-w-[100vw] grid-cols-3 grid-rows-1 gap-x-[3%] justify-between">
    {links.map((props) => Link(props))}</div>;
}
export default Navi;

"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@mui/material/Button";

const GoogleButton = () => {
  const { data: session } = useSession();
  if (session) {
    return <Button onClick={signOut}>Sign Out</Button>;
  } else {
    return <Button onClick={signIn("google")}>Sign In With Google</Button>;
  }
};

export default GoogleButton;

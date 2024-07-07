"use client";
import "./tailwind.css";
import Navi from "../components/navigator/nav.js";
import AudioPermission from "../components/Notif/voice.js";
import { useState, useEffect } from "react";
function Page() {
  const [status, setStatus] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // the background music

      var aud = new Audio();
      let playable = false;
      // if (aud.canPlayType("audio/flac")) {
      //    aud.src= "/audio/test.flac";
      //    playable=true;
      // }
      // else if (aud.canPlayType('"audio/ogg"; codecs="vorbis"')){
      //    aud.src = "/audio/test.ogg";
      //    playable = true;
      // }
      // else
      if (aud.canPlayType("audio/mpeg")) {
        aud.src = "/audio/test.mp3";
        playable = true;
      } else {
        console.log("Your browser does not support the audio element");
      }
      if (playable === true) {
        aud.muted = false;
        aud.volume = 0.7;
        aud.autoplay = true;
        aud.preload = "auto";
        aud
          .play()
          .then(() => {
            console.log("Audio played successfully");
          })
          .catch((err) => {
            console.log("playback is failed", err);
            if (err.name === "NotAllowedError" && err.message.includes("user didn't interact with the document first.")) {
              console.log("User did not interact with the document, play() was aborted.");
              setStatus(err.name);
              console.log(status);
            }
          });
        console.log(aud.src);
      }
    }
  }, []);

  return (
    <div className="h-screen">
      <Navi />
      <h1>Hello, Home page!</h1>
      <div className="fixed bottom-[20px] right-0 max-w-[40vw] flex justify-end">
        <AudioPermission status={status} />
      </div>
    </div>
  );
}

export default Page;

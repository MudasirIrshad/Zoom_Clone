"use client";
import {
  DeviceSelectorAudioInput,
  DeviceSelectorVideo,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

interface MeetingSetupProps {
  setIsSetupComplete: (value: boolean) => void;
}
function MeetingSetup({ setIsSetupComplete }: MeetingSetupProps) {
  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);

  const call = useCall();

  if (!call)
    throw new Error("use call must be used within stream call component");
  useEffect(() => {
    if (isMicCamToggledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToggledOn, call?.camera, call?.microphone]);
  return (
    <div className="h-screen flex w-full flex-col items-center justify-center gap-3">
      <h1 className="font-bold text-2xl">Setup</h1>
      <VideoPreview />
      <div className="flex flex-col items-center gap-2 text-xs sm:text-sm">
        <div>
          {" "}
          <input
            type="checkbox"
            onChange={(e) => {
              setIsMicCamToggledOn(e.target.checked);
            }}
          />{" "}
          Join with mic and camera off
        </div>
        <DeviceSelectorVideo />
      </div>
      <Button
        variant={"destructive"}
        className="bg-green-600"
        onClick={() => {
          call.join();
          setIsSetupComplete(true);
        }}
        
      >
        Join Meeting
      </Button>
    </div>
  );
}

export default MeetingSetup;

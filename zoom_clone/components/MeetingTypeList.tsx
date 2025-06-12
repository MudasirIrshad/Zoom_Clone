"use client";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { Calendar, PlusIcon, UserPlus2, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";

function MeetingTypeList() {
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  const router = useRouter();
  const createMeeting = () => {
    
  };
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        icon={
          <PlusIcon className="bg-white/30 backdrop-blur-lg p-1 rounded-lg w-12 h-12" />
        }
        title={"New Meeting"}
        description={"Start an instant meeting"}
        handleClick={() => setMeetingState("isInstantMeeting")}
        className="bg-cardColors-1"
      />
      <HomeCard
        icon={
          <UserPlus2 className="bg-white/30 backdrop-blur-lg p-1 rounded-lg w-12 h-12" />
        }
        title={"Join Meeting"}
        description={"via invitation link"}
        handleClick={() => setMeetingState("isJoiningMeeting")}
        className="bg-cardColors-2"
      />
      <HomeCard
        icon={
          <PlusIcon className="bg-white/30 backdrop-blur-lg p-1 rounded-lg w-12 h-12" />
        }
        title={"Schedule Meeting"}
        description={"Plan your meeting"}
        handleClick={() => setMeetingState("isScheduleMeeting")}
        className="bg-cardColors-3"
      />
      <HomeCard
        icon={
          <VideoIcon className="bg-white/30 backdrop-blur-lg p-1 rounded-lg w-12 h-12" />
        }
        title={"View Recodings"}
        description={"Meeting recordings"}
        handleClick={() => router.push("/recordings")}
        className="bg-cardColors-4"
      />
      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an instant meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </div>
  );
}

export default MeetingTypeList;

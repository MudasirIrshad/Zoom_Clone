"use client";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { Calendar, PlusIcon, UserPlus2, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import toast from "react-hot-toast";

function MeetingTypeList() {
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  const router = useRouter();

  const { user } = useUser();
  const client = useStreamVideoClient();

  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });
  const [callDetails, setCallDetails] = useState<Call>();
  const createMeeting = async () => {
    if (!client || !user) return;

    try {
      if (!values.dateTime)
        toast("Select Date and Time", {
          icon: "⏱️",
        });
      const id = crypto.randomUUID();
      const call = client.call("default", id);

      if (!call) throw new Error("failed to create call");

      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();

      const description = values.description || "Instant Meeting";

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });
      setCallDetails(call);

      if (!values.description) {
        router.push(`/meeting/${call.id}`);
        toast.success("Meeting Created");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failded to create meeting");
    }
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
          <Calendar className="bg-white/30 backdrop-blur-lg p-1 rounded-lg w-12 h-12" />
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

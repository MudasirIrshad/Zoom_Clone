"use server"
import GetTime from "@/components/GetTime";
import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";

function Home() {
  const currentDate = getDate();

  return (
    <div className="flex flex-col size-full gap-10">
      <div className="h-[300px] w-full rounded-[20px] p-5 py-12 px-8 bg-hero bg-cover md:px-12 lg:px-16">
        <div className="flex h-full flex-col justify-between">
          <h3 className="bg-gray-500 md:w-[250px] w-[210px] py-1 justify-center flex items-center rounded-lg md:text-base text-sm">
            Upcoming meeting at 12:30 PM
          </h3>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-5xl md:text-6xl">
              <GetTime />
            </h1>
            <p className="text-lg">{currentDate}</p>
          </div>
        </div>
      </div>

      <div>
        <MeetingTypeList />
      </div>
    </div>
  );
}

export default Home;

function getDate() {
  const now = new Date();
  const today = new Intl.DateTimeFormat("en-PK", {
    dateStyle: "full",
  }).format(now);
  return today;
}

"use client";
import React, { useEffect, useState } from "react";

function GetTime() {
  const [time, setTime] = useState<Date | null>(null);
  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    setTimeout(() => interval);
  }, []);
  return `${time?.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
}

export default GetTime;

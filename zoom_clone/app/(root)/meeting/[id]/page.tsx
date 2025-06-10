import React from "react";

function Meeting({ params }: { params: { id: string } }) {
  return <div>Meeting id: {params.id}</div>;
}

export default Meeting;

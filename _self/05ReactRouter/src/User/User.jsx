import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-[#F1F0E8] text-[#020887] text-center py-5 text-3xl">
      {userid ? `User ID: ${userid}` : `User`}
    </div>
  );
}

export default User;

import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-white flex flex-col justify-center items-center h-screen px-4">
      <div className="text-[#020887] text-center py-5 text-3xl">
        {userid ? `User ID: ${userid}` : `User`}
      </div>
    </div>
  );
}

export default User;

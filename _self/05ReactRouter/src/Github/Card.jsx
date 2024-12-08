import React from "react";

function Card({ imgUrl, username, followers, following }) {
  return (
    <div className="bg-white flex flex-col justify-center items-center h-screen px-4">
      <img
        src={imgUrl}
        alt="User avatar"
        className="rounded-full w-32 h-32 mb-4"
      />
      <h2 className="text-[#020887] text-2xl font-bold mb-2">{username}</h2>
      <div className="flex space-x-4">
        <p className="text-[#647AA3] font-medium">Followers: {followers}</p>
        <p className="text-[#647AA3] font-medium">Following: {following}</p>
      </div>
    </div>
  );
}

export default Card;

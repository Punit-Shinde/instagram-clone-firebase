import post from "../assets/sunny.jpg";
import dp from "../assets/luffy.jpg";
import React from "react";
import { Avatar } from "@mui/material";

const Post = ({username, caption, postimageURL}) => {
  return (
    <div className="post max-w-[500px] bg-white border border-solid border-gray-300 mb-12">
      <div className="post-header m-5 flex items-center">
        <Avatar className="post_avatar mr-2.5" src={dp} alt="Monkey D. Luffy" />
        <h3>{username}</h3>
      </div>
      {/* header= avatar + username */}

      <div className="post_image w-full object-contain border-t border-b border-solid border-gray-300">
        <img src={postimageURL} alt="" />
      </div>

      <h4 className="post_text font-normal p-5">
        <strong>{username}</strong>{caption}
      </h4>
    </div>
  );
};

export default Post;

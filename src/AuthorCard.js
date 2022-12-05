import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AuthorCard = ({ author }) => {
  return (
    <div>
      <h2>{author.name}</h2>
      <LazyLoadImage
        src={`${author.avatar.file.url}`}
        alt="avatar"
        width={150}
        height={150}
      />
      <p>{author.description}</p>
    </div>
  );
};

export default AuthorCard;

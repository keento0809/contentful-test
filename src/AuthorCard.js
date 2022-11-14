import React from "react";

const AuthorCard = ({ author }) => {
  return (
    <div>
      <h2>{author.name}</h2>
      <img src={`${author.avatar.file.url}`} alt="" width={150} height={150} />
      <p>{author.description}</p>
    </div>
  );
};

export default AuthorCard;

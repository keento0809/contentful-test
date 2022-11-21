import React from "react";
import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
    host: process.env.REACT_APP_CONTENTFUL_HOST,
  });
  const getAuthors = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "author",
        select: "fields",
      });
      const sanitizedEntries = entries.items.map((item) => {
        const avatar = item.fields.avatar.fields;
        return {
          ...item.fields,
          avatar,
        };
      });
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching authors: ${error}`);
    }
  };
  const getResume = async () => {
    try {
      const entry = await client.getEntries({
        content_type: "resume",
        select: "fields",
      });
      const resumeUrl =
        "https:" + entry.items[0].fields.myResume.fields.file.url;
      return resumeUrl;
    } catch (error) {
      console.log(error);
    }
  };
  return { getAuthors, getResume };
};

export default useContentful;

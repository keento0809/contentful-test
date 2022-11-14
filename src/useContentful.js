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
      console.log(entries);
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
  return { getAuthors };
};

export default useContentful;

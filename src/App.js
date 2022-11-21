import { useState, useEffect } from "react";
import AuthorCard from "./AuthorCard";
import useContentful from "./useContentful";

function App() {
  const [authors, setAuthors] = useState([]);
  const [resumeUrl, setResumeUrl] = useState("");
  const { getAuthors, getResume } = useContentful();
  useEffect(() => {
    getAuthors().then((response) => setAuthors(response));
    getResume().then((response) => setResumeUrl(response));
  }, []);
  return (
    <div className="App">
      {authors.map((author, index) => {
        return <AuthorCard key={index} author={author} />;
      })}
      <a href={resumeUrl && resumeUrl} target="_blank" rel="noopener">
        Resume
      </a>
    </div>
  );
}

export default App;

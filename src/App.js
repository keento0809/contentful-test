import { useState, useEffect } from "react";
import AuthorCard from "./AuthorCard";
import useContentful from "./useContentful";

function App() {
  const [authors, setAuthors] = useState([]);
  const { getAuthors } = useContentful();
  useEffect(() => {
    getAuthors().then((response) => setAuthors(response));
  }, []);
  return (
    <div className="App">
      {authors.map((author, index) => {
        return <AuthorCard key={index} author={author} />;
      })}
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import AuthorCard from "./AuthorCard";
import useContentful from "./useContentful";
import { LazyLoadImage } from "react-lazy-load-image-component";

function App() {
  const [authors, setAuthors] = useState([]);
  const [resumeUrl, setResumeUrl] = useState("");
  const [images, setImages] = useState([]);
  const { getAuthors, getResume, getImages } = useContentful();
  useEffect(() => {
    getAuthors().then((response) => setAuthors(response));
    getResume().then((response) => setResumeUrl(response));
    getImages().then((response) => setImages(response));
  }, []);
  return (
    <div className="App">
      {authors.map((author, index) => {
        return <AuthorCard key={index} author={author} />;
      })}
      <a href={resumeUrl && resumeUrl}>Resume</a>
      <div className="" style={{ paddingTop: "2rem" }}>
        {images &&
          images.map((image) => {
            return (
              <div>
                <LazyLoadImage
                  src={image}
                  style={{ width: "20%", height: "auto" }}
                  alt="picture"
                  effect="blur"
                />
                {/* <img src={image} style={{ width: "20%" }} alt="picture" /> */}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;

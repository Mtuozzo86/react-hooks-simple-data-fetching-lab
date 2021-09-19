// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState("");
  const [isLoaded, setIsloaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((data) => {
        setIsloaded(true);
        setDogImage(data.message);
      });
  }, []);
  if (!isLoaded) return <p>Loading...</p>;

  return <img src={dogImage} alt="A Random Dog" />;
}

export default App;

import { useState } from "react";

interface dogImage {
  message: string;
  status: string;
}

function App() {
  const [dogImage, setdogImage] = useState<dogImage["message"][]>([]);

  const handleGetDogImage = async () => {
    const response = await fetch(
      "https://dog.ceo/api/breeds/image/random"
    );
    const jsonBody: dogImage = await response.json();
    setdogImage(prevImages=>[...prevImages,jsonBody["message"]]);
  };

   /*const handleGetDogImage = () => {
     fetch("https://dog.ceo/api/breeds/image/random")
       .then((response) => response.json())
       .then((jsonBody: dogImage) => setdogImage(jsonBody));
   };*/

  if (dogImage.length>0) {
    return (
      <div>
        <h1>Dog Image app</h1>
        {dogImage.map((x,index)=><img src = {x} alt="my dog" ></img>)}
        <button onClick={handleGetDogImage}>Get another dog image</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Dog Image app</h1>
        <p>
          Click the button to trigger a <code>fetch</code> that gets a random
          dog image from an API!
        </p>
        <button onClick={handleGetDogImage}>Get dog image</button>
      </div>
    );
  }
}

export default App;

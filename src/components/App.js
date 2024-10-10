// create your App component here
import React, { useState, useEffect } from "react"; // Import React, useState, and useEffect hooks

// Define the App component
function App() {
  // State variable to store the fetched image URL, initialized as null
  const [imageUrl, setImageUrl] = useState(null);
  // State variable to handle the loading state, initialized as true (loading at the start)
  const [isLoading, setIsLoading] = useState(true);

  // useEffect hook runs after the component mounts (first render) to fetch the dog image
  useEffect(() => {
    // Fetch data from the dog API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json()) // Convert the response to JSON
      .then((data) => {
        setImageUrl(data.message); // Store the fetched image URL in the state
        setIsLoading(false); // Set loading to false once the image is fetched
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error); // Log any errors to the console
        setIsLoading(false); // Stop the loading state even if an error occurs
      });
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div>
      {/* Conditionally render "Loading..." while the data is being fetched */}
      {isLoading ? (
        <p>Loading...</p> // Show this paragraph while the API data is being fetched
      ) : (
        // Show the dog image once the data is fetched
        <img src={imageUrl} alt="A Random Dog" /> // Render the image, with the alt text set
      )}
    </div>
  );
}

export default App; // Export the App component to be used in index.js

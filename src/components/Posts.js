import React, { useEffect, useState } from "react";
import loadingAnimation from "../assets/loading.gif";

const Posts = () => {
  // initialise the state variables to set the data that fetched from api
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const userCallApi = async () => {
    // consume the api url asynchronously using js fetch method
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      try {
        userCallApi();
        setLoading(false); // set loading state to false
      } catch (error) {
        console.log(error);
      }
    }, 8000); // set 8 seconds delay to show loading animation
  }, []);

  return (
    <div>
      {loading ? (
        <img src={loadingAnimation} alt="loading" />
      ) : (
        <div className="posts">
          {data.map((item) => (
            <div key={item.id} className="flex-grid">
              <div className="col">{item.title}</div>
              <div className="col">{item.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;

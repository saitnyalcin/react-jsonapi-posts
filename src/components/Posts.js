import React, { useEffect, useState } from "react";
import loadingAnimation from "../assets/loading.gif";

const Posts = () => {
  // init the state variables to set the data that fetched from api
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const userCallApi = async () => {
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
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }, 8000);
  }, []);

  return (
    <div>
      {loading ? (
        <img src={loadingAnimation} alt="loading" />
      ) : (
        <div className="posts">
          {data.map((item) => (
            <div className="flex-grid">
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

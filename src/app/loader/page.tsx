"use client";
import React, { useState, useEffect } from "react";
import RoundedLoader from "./RoundedLoader";

const YourPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate a delay (you can replace this with your actual data fetching logic)
    const fetchData = async () => {
      // Your data fetching logic here
      // For example, using setTimeout to simulate loading data
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <RoundedLoader />
      ) : (
        <div>
          <h1>Your Content Here</h1>
        </div>
      )}
    </div>
  );
};

export default YourPage;

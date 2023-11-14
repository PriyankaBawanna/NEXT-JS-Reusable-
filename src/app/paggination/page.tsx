// pages/index.tsx
"use client";
import React, { useState } from "react";
import Pagination from "./Pagination";

interface PageProps {
  data: string[];
}

const fetchData = async (page: number): Promise<PageProps> => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  console.log("Data", data);
  return { data };
};

const HomePage: React.FC<PageProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = async (selectedPage: number) => {
    setCurrentPage(selectedPage);
    // Fetch data for the selected page
    const newData = await fetchData(selectedPage);
    // Update the component's state or perform other actions with the new data
    console.log("newData", newData);
  };

  return (
    <div>
      <h1>Page {currentPage}</h1>
      <ul>
        {data?.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Pagination pageCount={5} onPageChange={handlePageChange} />
    </div>
  );
};

export default HomePage;

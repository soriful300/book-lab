import React, { use, useEffect, useState } from "react";
import Book from "./Book";

const Books = ({ data }) => {
  const [allBooks, setBooks] = useState([]);
  // useEffect(() => {
  //   fetch("data.json").then((res) =>
  //     res.json().then((data) => console.log(data))
  //   );
  // }, []);

  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto">
      {data.map((book, index) => {
        return (
          <div>
            <Book key={index} book={book}></Book>
          </div>
        );
      })}
    </div>
  );
};

export default Books;

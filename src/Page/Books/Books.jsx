import React, { useEffect, useState } from "react";
import Book from "./Book";

const Books = ({ data }) => {
  const [books, setBooks] = useState(data);
  const [searchText, setSearchText] = useState("");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setBooks(showAll ? data : data.slice(0, 6));
  }, [showAll, data]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (searchText === "") {
      setBooks(data);
      return;
    }
    const searchTerm = searchText.toLowerCase();
    const searchBooks = books.filter((book) =>
      book.bookName.toLowerCase().includes(searchTerm)
    );
    setBooks(searchBooks);
    setSearchText("");
  };

  return (
    <div className="">
      <div className="flex justify-center mt-8">
        <label className="input w-7/12">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <form action="">
            <input
              type=""
              defaultValue={searchText}
              onChange={(e) => handleSearch(e)}
              required
              placeholder="Search by Book Name"
            />
          </form>
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-8">
        {books?.map((book, index) => {
          return (
            <div>
              <Book key={index} book={book}></Book>
            </div>
          );
        })}
      </div>
      <div className="items-center text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-green btn mb-4"
        >
          {showAll ? `Show Less` : "Show All"}
        </button>
      </div>
    </div>
  );
};

export default Books;

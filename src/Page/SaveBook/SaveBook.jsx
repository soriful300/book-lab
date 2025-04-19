import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { deleteItem, getWishListItem } from "../../Utility/addToDB";
import Book from "../Books/Book";
import {
  deleteReadListItem,
  getMarkAsReadToStorage,
} from "../../Utility/addMarkAsRead";
import NoBookWishList from "./NoBookWishList";

const SaveBook = () => {
  const [wishBookList, setWishBookList] = useState([]);
  const [markAsRead, setMarkAsRead] = useState([]);
  const [sort, setSort] = useState([]);
  const data = useLoaderData();

  //get wishList from local storage
  useEffect(() => {
    const wishData = getWishListItem();
    const wishId = wishData?.map((wId) => parseInt(wId));
    const filterWishBooks = data?.filter((book) =>
      wishId.includes(book.bookId)
    );
    setWishBookList(filterWishBooks);
  }, [data]);

  //get ReadList from local storage
  useEffect(() => {
    const markAsReadBook = getMarkAsReadToStorage();
    const parseBook = markAsReadBook.map((book) => parseInt(book));
    const filterReadBook = data.filter((book) =>
      parseBook.includes(book.bookId)
    );
    setMarkAsRead(filterReadBook);
  }, [setMarkAsRead, data]);
  const handleSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const sortByPage = [...wishBookList].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setWishBookList(sortByPage);
    }
    if (type === "ratings") {
      const sortByRating = [...wishBookList].sort(
        (a, b) => a.rating - b.rating
      );
      setWishBookList(sortByRating);
    }
  };

  const handleDeleteWishList = (bookId) => {
    deleteItem(bookId);
    // setWishBookList(wishBookList.filter((book) => book.bookId != bookId));
    setWishBookList(getWishListItem());
  };

  const handleDeleteReadList = (id) => {
    deleteReadListItem(id);
    setmarkAsRead(getMarkAsReadToStorage());
  };

  // console.log(wishBookList);

  return (
    <div className="">
      <div className=" text-center py-6 bg-gray-200 mt-8 rounded-lg ">
        <h1
          className="
        text-xl font-bold"
        >
          Books
        </h1>
      </div>
      <div className=" text-center my-6">
        <div className="dropdown ">
          <div
            tabIndex={0}
            role="btn "
            className="btn m-1 text-white  btn-success"
          >
            Sorted By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handleSort("pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("ratings")}>Ratings</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>WishList</Tab>

          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          {wishBookList.length > 0 ? (
            <h1>No Book in WishList</h1>
          ) : (
            <div className="">
              {wishBookList?.map((wBook) => {
                return (
                  <div className="flex gap-16 mt-4 border-b border-gray-100 p-2 ">
                    <div className="p-8  rounded-lg bg-gray-100">
                      <img
                        className="h-40 w-30  mt-2"
                        src={wBook.image}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <h1>{wBook.bookName}</h1>
                      <p>By: {wBook.author}</p>
                      <div className="flex gap-4 ">
                        <p>
                          <span className="font-bold">Tag</span>
                        </p>
                        {wBook?.tags?.map((tag) => (
                          <p className=" rounded-lg ">{tag}</p>
                        ))}
                      </div>
                      <p>Year of Publishing {wBook.yearOfPublishing}</p>
                      <div className="mt-4">
                        <div className="space-x-8">
                          <button className="btn">
                            Category {SaveBook.category}
                          </button>
                          <Link to={`/bookDetails/${wBook.bookId}`}>
                            <button className="btn">View Details</button>
                          </Link>

                          <button
                            onClick={() => handleDeleteWishList(wBook.bookId)}
                            className="btn"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </TabPanel>
        <TabPanel>
          <div className="">
            {markAsRead?.map((wBook) => {
              return (
                <div className="flex gap-16 mt-4 border-b border-gray-100 p-2 ">
                  <div className="p-8  rounded-lg bg-gray-100">
                    <img className="h-40 w-30  mt-2" src={wBook.image} alt="" />
                  </div>
                  <div className="">
                    <h1>{wBook.bookName}</h1>
                    <p>By: {wBook.author}</p>
                    <div className="flex gap-4 ">
                      <p>
                        <span className="font-bold">Tag</span>
                      </p>
                      {wBook?.tags?.map((tag) => (
                        <p className=" rounded-lg ">{tag}</p>
                      ))}
                    </div>
                    <p>Year of Publishing {wBook.yearOfPublishing}</p>
                    <div className="mt-4">
                      <div className="space-x-8">
                        <button className="btn">
                          Category {SaveBook.category}
                        </button>
                        <Link to={`/bookDetails/${wBook.bookId}`}>
                          <button className="btn">View Details</button>
                        </Link>

                        <button
                          onClick={() => handleDeleteReadList(wBook.bookId)}
                          className="btn"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SaveBook;

import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addItemLocalStorage } from "../../Utility/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const bookData = useLoaderData();
  //   console.log(bookData);
  const detailsBook = bookData.find((book) => book.bookId === parseInt(id));
  const { bookName, author, image } = detailsBook;
  const handleAddWishList = (id) => {
    addItemLocalStorage(id);
  };

  return (
    <div className=" mx-auto">
      <div className="card bg-base-100 w-3/4 mx-auto my-8 shadow-sm ">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl w-sm" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{bookName}</h2>
          <p>{author}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Mark As Read</button>
            <button
              onClick={() => handleAddWishList(id)}
              className="btn btn-primary"
            >
              Add WishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

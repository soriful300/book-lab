import React from "react";
import { Link } from "react-router";
import { CiStar } from "react-icons/ci";

const Book = ({ book }) => {
  const {
    bookName,
    author,
    category,
    image,
    tags,
    rating,
    bookId,
  } = book;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 shadow-sm mt-4 mb-4">
        <div className=" bg-gray-50 place-items-center m-4 rounded-xl p-2">
          <img className="h-40 p-4 mt-2" src={image} alt="Shoes" />
        </div>
        <div className="card-body font-bold">
          <div className="flex gap-4 ">
            {tags.map((tag) => (
              <div className="badge badge-outline rounded-4xl bg-[#23BE0A10] font-bold text-[#23BE0A]">
                <p className="">{tag}</p>
              </div>
            ))}
          </div>
          <div className="text-ellipsis">
            <h2 className="text-3xl mt-2  whitespace-nowrap overflow-hidden text-ellipsis">
              {bookName}
            </h2>
          </div>

          <p className="text-[#13131380] ">By : {author}</p>
          <span className="border border-dashed border-[#13131315] mt-2"></span>
          <div className="flex  justify-between mt-2 text-[#13131380] font-bold">
            <div className="">{category}</div>
            <div className="flex items-center gap-2 ">
              <p>{rating}</p>
              <CiStar size={15} color="black" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;

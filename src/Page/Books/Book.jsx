import React from 'react';
import { Link } from 'react-router';

const Book = ({book}) => {
    
    const { bookName,totalPages, author, image, tags, rating, bookId } = book;
    
    return (
      <Link to={`/bookDetails/${bookId}`}>
        <div className="card bg-base-100  shadow-sm mt-8 mb-8">
       
          <figure>
            <img
              className="h-40 p-4  rounded-xl bg-gray-50 mt-2"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{bookName}</h2>
            <h4 className="font-bold">Pages: {totalPages}</h4>
            <p>{author}</p>
            <div className="flex justify-between mt-4">
              <div className="card-actions justify-end">
                {tags.map((tag) => (
                  <div className="badge badge-outline">{tag}</div>
                ))}
              </div>

              <div>
                <p>{rating}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
};

export default Book;
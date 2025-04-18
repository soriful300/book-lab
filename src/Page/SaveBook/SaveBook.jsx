import React from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getWishListItem } from "../../Utility/addToDB";
import Book from "../Books/Book";

const SaveBook = () => {
  const data = useLoaderData();
  const wishData = getWishListItem();
  const wishId = wishData.map((wId) => parseInt(wId));
  const wishBookList = data.filter((book) => wishId.includes(book.bookId));
  // console.log(wishBookList);

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>WishList</Tab>

          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>{wishBookList.map((wBook,index) => {
          return(
            <div key={index}>
              <Book></Book>
            <h1>{wBook.bookName}</h1>
          </div>
          )
          
        })}</TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SaveBook;

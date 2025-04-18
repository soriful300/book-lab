const getWishListItem = () => {
  const wishItem = localStorage.getItem("wishList");
  if (wishItem) {
    const parseItem = JSON.parse(wishItem);
    return parseItem;
  } else {
    return [];
  }
};

const addItemLocalStorage = (id) => {
  const getWishItem = getWishListItem();

  if (getWishItem.includes(id)) {
    alert("Already Have a Whish list");
  } else {
    getWishItem.push(id);
    localStorage.setItem("wishList", JSON.stringify(getWishItem));
  }
};

export { addItemLocalStorage, getWishListItem };

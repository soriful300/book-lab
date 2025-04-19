const getMarkAsReadToStorage = () => {
  const item = localStorage.getItem("readList");
  if (item) {
    const parseItem = JSON.parse(item);
    return parseItem;
  } else {
    return [];
  }
};

const setItemOnStorage = (id) => {
  const prevItem = getMarkAsReadToStorage();

  if (prevItem.includes(id)) {
    alert("Al ready added this book");
  } else {
    prevItem.push(id);
    const stringifyItem = JSON.stringify(prevItem);
    localStorage.setItem("readList", stringifyItem);
  }
};

const deleteReadListItem = (id) => {
  const getItem = getMarkAsReadToStorage();
  const filterDeleteItem = getItem.filter((item) => item != id);
  localStorage.setItem("readList", JSON.stringify(filterDeleteItem));
};

export { setItemOnStorage, deleteReadListItem,getMarkAsReadToStorage };

// import books from "../data/books.js";

export const getAllBooks = async (_, res) => {
  return res.json({
    route: "Books",
    method: "GET",
  });
};

export const uploadBook = async (_, res) => {
  return res.json({
    route: "Books",
    method: "POST",
  });
};

export const updateBook = async (_, res) => {
  return res.json({
    route: "Books",
    method: "PUT",
  });
};

export const deleteBook = async (_, res) => {
  return res.json({
    route: "Books",
    method: "Delete",
  });
};

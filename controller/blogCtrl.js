export const getAllBlogs = (_, res) => {
  res.status(200);
  return res.json({
    route: "blog",
    method: "GET",
  });
};

export const getBlog = (_, res) => {
  return res.json({
    route: "Blog",
    method: "GET (id)",
  });
};

export const uploadBlog = (_, res) => {
  return res.json({
    route: "Advert",
    method: "POST",
  });
};

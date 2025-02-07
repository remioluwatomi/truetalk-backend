export const getAllImages = async (req, res, next) => {
  return res.json({
    route: "Gallery",
    method: "GET",
  });
};

export const uploadImage = async (req, res, next) => {
  return res.json({
    route: "Gallery",
    method: "POST",
  });
};

export const deleteImage = async (req, res, next) => {
  return res.json({
    route: "Gallery",
    method: "DELETE",
  });
};

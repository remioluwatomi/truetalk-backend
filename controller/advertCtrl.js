export const getAdverts = async (_, res) => {
  return res.json({
    route: "Advert",
    method: "GET",
  });
};

export const uploadAdvert = (_, res) => {
  return res.json({
    route: "Advert",
    method: "POST",
  });
};

export const modifyAdvert = async (req, res, next) => {
  return res.json({
    route: "Advert",
    method: "PUT",
  });
};

export const deleteAdvert = async (req, res, next) => {
  return res.json({
    route: "Advert",
    method: "DELETE",
  });
};

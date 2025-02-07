export const getAllVids = async (req, res) => {
  return res.json({
    route: "Video",
    method: "GET",
  });
};

export const uploadVid = (req, res) => {
  return res.json({
    route: "Video",
    method: "POST",
  });
};

export const updateVid = async (req, res, next) => {
  return res.json({
    route: "Video",
    method: "PUT",
  });
};

export const deleteVid = async (req, res, next) => {
  return res.json({
    route: "Advert",
    method: "DELETE",
  });
};

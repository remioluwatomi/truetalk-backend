import { where } from "sequelize";
import { Advert } from "../models/m_adverts.js";

export const getAdverts = async (req, res) => {
  try {
    const adverts = await Advert.findAll();
    const advertsData = adverts.map(({ dataValues }) => dataValues);
    res.status(200).json(advertsData).end();
  } catch (e) {
    console.log(e);
    res.status(500).json([]);
  }
};

export const uploadAdvert = (req, res, next) => {
  const { img, title, description, advertLink } = req.resourceInfo;

  try {
    Advert.create({
      title,
      description,
      advertLink,
      img,
    })
      .then((newAdvert) => {
        res.status(201).json({
          message: "Advert uploaded successfully",
          uploaded: true,
        });
      })
      .catch((e) => {
        res.status(400).json({
          uploaded: false,
          message: "Advert upload failed. Advert title already exist",
        });
      });
  } catch (e) {
    next(e);
  }
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

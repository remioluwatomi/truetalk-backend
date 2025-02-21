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

import {Request,Response} from "express";

const createStation = async (
  req: Request,
  res: Response
) => {
  res.send("create station");
};

const getAllStations = async (
  req: Request, 
  res: Response
  ) => {
  res.send("get all station");
};

const updateStation = async (
  req: Request,
  res: Response
) => {
  res.send("ubdate station");
};

const deleteStation = async (
  req: Request,
  res: Response
) => {
  res.send("delete station");
};
const showStations = async (
  req: Request,
  res: Response
) => {
  res.send("show stations");
};

export {
  createStation,
  getAllStations,
  updateStation,
  deleteStation,
  showStations
};

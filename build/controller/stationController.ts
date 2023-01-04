import express from "express";

const createStation = async (
  req: express.Request,
  res: express.Response
) => {
  res.send("create station");
};

const getAllStations = async (
  req: express.Request, 
  res: express.Response
  ) => {
  res.send("get all station");
};

const updateStation = async (
  req: express.Request,
  res: express.Response
) => {
  res.send("ubdate station");
};

const deleteStation = async (
  req: express.Request,
  res: express.Response
) => {
  res.send("delete station");
};
const showStations = async (
  req: express.Request,
  res: express.Response
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

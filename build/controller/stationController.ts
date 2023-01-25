import "express-async-errors";
import mongoose from 'mongoose'
import moment from 'moment';
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors";
import Station from "../models/Station";

interface Create {
  Nimi: string;
  Namn: string;
  Name: string;
  Osoite: string;
  Adress: string;
  Kaupunki: string;
  Stad: string;
  Operaattor: string;
  Kapasiteet: string;
  x: number;
  y: number;
}

interface GetStations {
  status: any;
  station: any;
  sort: any;
  search: any;
}


const createStation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    Nimi,
    Namn,
    Name,
    Osoite,
    Adress,
    Kaupunki,
    Stad,
    Operaattor,
    Kapasiteet,
    x,
    y,
  }: Create = req.body;
  if (
    !Nimi ||
    !Namn ||
    !Name ||
    !Osoite ||
    !Adress ||
    !Kaupunki ||
    !Stad ||
    !Operaattor ||
    !Kapasiteet ||
    !x ||
    !y
  ) {
    throw new BadRequestError("please provide all values");
  }
  const stationAlreadyExists = await Station.findOne({
    Nimi,
    Namn,
    Name,
    Osoite,
    Adress,
    Kaupunki,
    Stad,
    Operaattor,
    Kapasiteet,
    x,
    y,
  });
  if (stationAlreadyExists) {
    throw new BadRequestError("Station already exists!");
  }

  const station = await Station.create({
    Nimi,
    Namn,
    Name,
    Osoite,
    Adress,
    Kaupunki,
    Stad,
    Operaattor,
    Kapasiteet,
    x,
    y,
  });
  res.status(StatusCodes.OK).json({ station });
};

const getAllStations = async (req: any, res: Response) => {
  const { status, station, sort, search }: GetStations = req.query;
  const queryObject = {
    createdBy: req.stations,
  };
  let result = Station.find(queryObject);
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const jobs = await result;

  const totalJobs = await Station.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalJobs / limit);

  res.status(StatusCodes.OK).json({ jobs, totalJobs, numOfPages });
};


const deleteStation = async (req: Request, res: Response) => {
    const { id: stationId } = req.params;
  
    const station = await Station.findOne({ _id: stationId });
  
    if (!station) {
      throw new NotFoundError(`No job with id :${stationId}`);
    }
    
    await station.remove();
  
    res.status(StatusCodes.OK).json({ msg: 'Success! Job removed' });
  };


export {
  createStation,
  getAllStations,
  deleteStation,
};

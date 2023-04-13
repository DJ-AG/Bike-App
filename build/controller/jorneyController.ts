import Jorney from "../models/Jorney"
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors";

export const createJorney = async (req: any, res: any) => {
  const { Departure, Return, Departure_station_id, Departure_station_name, Return_station_id, Return_station_name, Covered_distance_m, Duration } = req.body;

  //  if (!Departure || !Return || !Departure_station_id || !Departure_station_name || !Return_station_id || !Return_station_name || !Covered_distance_m || !Duration) {
  //    throw new BadRequestError("Please Provide All Values");
  //  }


  const jorney = await Jorney.create(req.body);
  res.status(StatusCodes.CREATED).json({ jorney });
};

export const getAllJorneys = async (req: any, res: any) => {
  let result = Jorney.find(req.jorneys);
  const jorneys = await result;
  const totalJorneys = await Jorney.countDocuments();

  const numOfPages = Math.ceil(totalJorneys / 10);
  
  res.status(StatusCodes.OK).json({ jorneys, totalJorneys, numOfPages });
};

export const deleteJorney = async (req: any, res: any) => {
  const { id: jorneyId } = req.params;

  const jorney = await Jorney.findOne({ _id: jorneyId });

  if (!jorney) {
    throw new NotFoundError(`No jorneys with id :${jorneyId}`);
  }

  await jorney.remove();

  res.status(StatusCodes.OK).json({ msg: "Success! jorney removed" });
};

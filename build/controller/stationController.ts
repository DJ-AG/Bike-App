import Station from "../models/Station";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors";

export const createStation = async (req: any, res: any) => {
  const { Name, Adress, Operaattor, Capacity, x, y } = req.body;
  if (!Name || !Adress || !Operaattor || !Capacity || !x || !y) {
    throw new BadRequestError("Please Provide All Values");
  }
  const station = await Station.create(req.body);
  res.status(StatusCodes.CREATED).json({ station });
};

export const getAllStations = async (req:any,res:any) => {
  let result =  Station.find(req.stations)
  const stations = await result;
  const totalStations = await Station.countDocuments();
  const numOfPages = Math.ceil(totalStations/10);
  res.status(StatusCodes.OK).json({ stations,totalStations,numOfPages });
}

export const deleteStation = async(req:any,res:any) => {
  const { id: stationId } = req.params;

  const station = await Station.findOne({ _id: stationId });

  if (!station) {
    throw new NotFoundError(`No station with id :${stationId}`);
  }

  await station.remove();

  res.status(StatusCodes.OK).json({ msg: 'Success! station removed' });
};

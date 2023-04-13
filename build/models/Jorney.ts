import mongoose from "mongoose";

export interface Jorney {
  Departure: string;
  Return: string;
  Departure_station_id: string;
  Departure_station_name: string;
  Return_station_id: string;
  Return_station_name: string;
  Covered_distance_m: string;
  Duration: string;
}

const JorneySchema = new mongoose.Schema<Jorney>({
  Departure: {
    type: String,
  },
  Return: {
    type: String,
  },
  Departure_station_id: {
    type: String,
  },
  Departure_station_name: {
    type: String,
  },
  Return_station_id: {
    type: String,
  },
  Return_station_name: {
    type: String,
  },
  Covered_distance_m: {
    type: String,
  },
  Duration: {
    type: String,
  },
});

export default mongoose.model("Jorney", JorneySchema);

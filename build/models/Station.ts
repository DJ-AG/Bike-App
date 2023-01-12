import mongoose from "mongoose";

interface Station {
  Nimi: string;
  Namn: string;
  Name: string;
  Osoite: string;
  Adress: string;
  Kaupunki: string;
  Stad: string;
  Operaattor: string;
  Kapasiteet: string;
  x: string;
  y: string;
}

const StationSchema = new mongoose.Schema<Station>({
  Nimi: {
    type: String,
    required: [true, "Anna nimi"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  Namn: {
    type: String,
    required: [true, "Ange namn"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  Name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  Osoite: {
    type: String,
    required: [true, "Anna Osoite / Please provide address"],
    unique: true,
  },
  Adress: {
    type: String,
    required: [true, "Please provide adress"],
    unique: true,
  },
  Kaupunki: {
    type: String,
    required: [true, "Anna kaupunki / Please provide City"],
    unique: true,
  },
  Stad: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
  },
  Operaattor: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
  },
  Kapasiteet: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
  },
  x: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
  },
  y: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
  },
});



export default mongoose.model("User", StationSchema);

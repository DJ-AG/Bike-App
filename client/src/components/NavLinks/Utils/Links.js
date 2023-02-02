import {IoHome } from "react-icons/io5";
import {MdDirectionsBike } from "react-icons/md";
import {IoIosCreate } from "react-icons/io";
import { ImProfile } from "react-icons/im";

const links = [
  { id: 1, text: "About", path: "/", icon: <IoHome /> },
  { id: 2, text: "All Stations", path: "all-stations", icon: <MdDirectionsBike/> },
  { id: 3, text: "Add Station", path: "add-station", icon: <IoIosCreate /> },
  { id: 4, text: "Profile", path: "profile", icon: <ImProfile /> },
];

export default links;

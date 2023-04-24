import { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import {
  LongestJorney,
  Loading,
  Alert,
  Jorney,
  PageBtnContainer,
} from "../index";
import Wrapper from "./jorneyContainer_wrapper";
import { useAction } from "../../hooks/useActions";

const JorneyContainer = () => {
  const {
    isLoading,
    jorneys,
    page,
    search,
    numOfPages,
    showAlert,
    totalJorneys,
    pageLimit,
    sort
  } = useTypedSelector((state) => state.stations);
  const { getJorneys } = useAction();

  useEffect(() => {
    getJorneys();
    // eslint-disable-next-line
  }, [page, search]);

  if (isLoading) {
    return <Loading center />;
  }
  if (jorneys.length === 0) {
    return (
      <Wrapper>
        <h2>No jorneys to display...</h2>
      </Wrapper>
    );
  }
  const indexOfLastJorney = page * pageLimit;
  const indexOfFirstJorney = indexOfLastJorney - pageLimit;

  let data = JSON.stringify(jorneys)
    .replaceAll(" ", "_")
    .replaceAll(" ", "_")
    .replaceAll("(", "")
    .replaceAll(")", "");
  let fixedData = JSON.parse(data);
  let longesJorney = {
    distants: 0,
    from: "",
    to: "",
    time: {},
  };
  console.log(fixedData);


  const Render = fixedData
    .filter((find: any) =>
      find.Departure_station_name.toLowerCase().includes(search.toLowerCase())
    )
    .sort(function(a: any, b: any){
      if(sort === "Longes Distance") return b.Covered_distance_m - a.Covered_distance_m
      if(sort === "Shortest Distance") return a.Covered_distance_m - b.Covered_distance_m

    })
    .slice(indexOfFirstJorney, indexOfLastJorney)
    .map((jorney: any) => {
      if (jorney.Covered_distance_m > longesJorney.distants) {
        longesJorney.distants = jorney.Covered_distance_m;
        longesJorney.from = jorney.Departure_station_name;
        longesJorney.to = jorney.Return_station_name;
        longesJorney.time = jorney.Duration_sec;
      }
      return <Jorney key={jorney._id} {...jorney} />;
    });
  return (
    <Wrapper>
      {showAlert && <Alert />}
      <h5>
        {totalJorneys} jorney{jorneys.length > 1 && "s"} found
      </h5>
      <div className="jorneys">{Render}</div>
      {numOfPages > 1 && <PageBtnContainer value={totalJorneys} />}
    </Wrapper>
  );
};

export default JorneyContainer;

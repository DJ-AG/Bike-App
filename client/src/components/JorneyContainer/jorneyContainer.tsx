import { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import { Loading, Alert, Jorney, PageBtnContainer } from "../index";
import Wrapper from "./jorneyContainer_wrapper";
import { useAction } from "../../hooks/useActions";
import { Sorting } from "../../utils/HelperUtil";

const JorneyContainer = () => {
  const {
    isLoading,
    jorneys,
    page,
    search,
    numOfPages,
    showAlert,
    pageLimit,
    sort,
  } = useTypedSelector((state) => state.stations);
  const { getJorneys } = useAction();

  useEffect(() => {
    getJorneys(page, sort, search);
    // eslint-disable-next-line
  }, [page, search, sort]);

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

  const value = "jorneys";

  let data = JSON.stringify(jorneys)
    .replaceAll(" ", "_")
    .replaceAll(" ", "_")
    .replaceAll("(", "")
    .replaceAll(")", "");
  let fixedData = JSON.parse(data);

  let count = 0;
  const Render = fixedData
    .filter((find: any) => {
      if (
        find.Departure_station_name.toLowerCase().includes(search.toLowerCase())
      ) {
        count++;
        return find.Departure_station_name.toLowerCase().includes(
          search.toLowerCase()
        );
      }
      return null;
    })
    .sort(Sorting({ value, sort }))
    .slice(indexOfFirstJorney, indexOfLastJorney)
    .map((jorney: any) => {
      return <Jorney key={jorney._id} {...jorney} />;
    });
  return (
    <Wrapper>
      {showAlert && <Alert />}
      <h5>
        {count} jorney{jorneys.length > 1 && "s"} found
      </h5>
      <div className="jorneys">{Render}</div>
      {numOfPages > 1 && <PageBtnContainer value={count} />}
    </Wrapper>
  );
};

export default JorneyContainer;

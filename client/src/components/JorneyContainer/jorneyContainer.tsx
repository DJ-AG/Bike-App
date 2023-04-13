import { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import Loading from "../Loading/loading";
import Wrapper from "./jorneyContainer_wrapper";
import Alert from "../Alert/Alert";
import Jorney from "../Jorney/Jorney";
import PageBtnContainer from "../PageBtnContainer/pageBtnContainer";
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
  const Render = jorneys
    .slice(indexOfFirstJorney, indexOfLastJorney)
    .map((jorney: any) => {
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

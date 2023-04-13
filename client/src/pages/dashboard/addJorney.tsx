import { useEffect } from "react";
import { FormRow, Alert } from "../../components/index";
import { useAction } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import Wrapper from "./addStation_wrapper";

const AddJorney = () => {
  const {
    Departure,
    Return,
    Departure_station_id,
    Departure_station_name,
    Return_station_id,
    Return_station_name,
    Covered_distance_m,
    Duration,
    showAlert,
    isLoading,
  } = useTypedSelector((state) => state.stations);
  const { clearValues, handleChange, createJorney } = useAction();
  const { getJorneys } = useAction();
  useEffect(() => {
    getJorneys();
    // eslint-disable-next-line
  }, []);
  const handleSubmit = (e: any) => {

    createJorney(
      Departure,
      Return,
      Departure_station_id,
      Departure_station_name,
      Return_station_id,
      Return_station_name,
      Covered_distance_m,
      Duration
    );
  };

  const handleJorneyInput = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>add jorney</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            labelText="Departure"
            name="Departure"
            value={Departure}
            handleChange={handleJorneyInput}
          />

          <FormRow
            type="text"
            labelText="Return"
            name="Return"
            value={Return}
            handleChange={handleJorneyInput}
          />
          <FormRow
            type="text"
            name="Departure_station_name"
            labelText="Departure station name"
            value={Departure_station_name}
            handleChange={handleJorneyInput}
          />
          <FormRow
            type="text"
            labelText="Duration"
            name="Duration"
            value={Duration}
            handleChange={handleJorneyInput}
          />
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            <button
              className="btn btn-block clear-btn"
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddJorney;

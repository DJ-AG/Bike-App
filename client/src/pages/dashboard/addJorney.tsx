import { FormRow, FormRowSelect, Alert } from "../../components/index";
import { useAction } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import Wrapper from "./addStation_wrapper";

const AddStation = () => {
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
    isLoading
  } = useTypedSelector((state) => state.stations);
  const { displayAlert, clearValues, handleChange, createJorney } = useAction();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      !Departure ||
      !Return ||
      !Departure_station_id ||
      !Departure_station_name ||
      !Return_station_id ||
      !Return_station_name ||
      !Covered_distance_m ||
      !Duration
    ) {
      displayAlert();
      return;
    }
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
        <h3>add station</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          {/* Name */}
          <FormRow
            type="text"
            labelText="Departure"
            name="Departure"
            value={Departure}
            handleChange={handleJorneyInput}
          />
          {/* Adress */}
          <FormRow
            type="text"
            labelText="Return"
            name="Return"
            value={Return}
            handleChange={handleJorneyInput}
          />
          {/* Capacity */}
          <FormRow
            type="text"
            name="Departure_station_id"
            labelText="Departure_station_id"
            value={Departure_station_id}
            handleChange={handleJorneyInput}
          />
          {/* Coordinates */}
          <FormRow
            type="text"
            name="Departure_station_name"
            labelText="Departure_station_name"
            value={Departure_station_name}
            handleChange={handleJorneyInput}
          />
          <FormRow
            type="text"
            name="Return_station_id"
            labelText="Return_station_id"
            value={Return_station_id}
            handleChange={handleJorneyInput}
          />
          {/* City */}
          <FormRow
            type="text"
            labelText="Covered_distance_m"
            name="Covered_distance_m"
            value={Covered_distance_m}
            handleChange={handleJorneyInput}
          />
          {/* Operaattor */}
          <FormRow
            type="text"
            labelText="Duration"
            name="Duration"
            value={Duration}
            handleChange={handleJorneyInput}
          />
          {/* btn container */}
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
export default AddStation;

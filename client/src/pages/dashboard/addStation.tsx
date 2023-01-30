import { FormRow, FormRowSelect, Alert } from "../../components/index";
import { useAction } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import Wrapper from "./addStation_wrapper";

const AddStation = () => {
  const {
    Name,
    Adress,
    City,
    CityTypeOptions,
    Operaattor,
    OperaattorTypeOptions,
    Capacity,
    x,
    y,
    showAlert,
    isLoading,
  } = useTypedSelector((state) => state.stations);
  const { displayAlert, clearValues, handleChange, createStation } =
    useAction();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!Name || !Adress || !City || !Operaattor || !Capacity || !x || !y) {
      displayAlert();
      return;
    }
    createStation(Name, Adress, City, Operaattor, Capacity, x, y);
  };

  const handleStationInput = (e: any) => {
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
            labelText="Name"
            name="Name"
            value={Name}
            handleChange={handleStationInput}
          />
          {/* Adress */}
          <FormRow
            type="text"
            labelText="Adress"
            name="Adress"
            value={Adress}
            handleChange={handleStationInput}
          />
          {/* Capacity */}
          <FormRow
            type="text"
            name="Capacity"
            labelText="Capacity"
            value={Capacity}
            handleChange={handleStationInput}
          />
          {/* Coordinates */}
          <FormRow
            type="text"
            name="x"
            labelText="x cordinaatti"
            value={x}
            handleChange={handleStationInput}
          />
          <FormRow
            type="text"
            name="y"
            labelText="y cordinaatti"
            value={y}
            handleChange={handleStationInput}
          />
          {/* City */}
          <FormRowSelect
            labelText="City"
            name="City"
            value={City}
            handleChange={handleStationInput}
            list={["Select City", ...CityTypeOptions]}
          />
          {/* Operaattor */}
          <FormRowSelect
            labelText="Operaattor"
            name="Operaattor"
            value={Operaattor}
            handleChange={handleStationInput}
            list={["Select Operaattor", ...OperaattorTypeOptions]}
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

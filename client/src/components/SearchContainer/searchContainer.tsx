import { FormRow, FormRowSelect } from "../index";
import { useState, useMemo } from "react";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import { useAction } from "../../hooks/useActions";
import Wrapper from './searchContainer_wrapper'
const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState("");
  const {
    isLoading,
    search,
    searchType,
    sort,
  } = useTypedSelector((state) => state.stations);
  const { handleChange,clearFilters } = useAction();
  const handleSearch = (e:any) => {
    handleChange({ name: e.target.name, value: e.target.value });
  };
  const handleSubmit = (e:any) => {
    e.preventDefault();
    setLocalSearch("");
    clearFilters();
  };
  const debounce = () => {
    let timeoutID:any;
    return (e:any) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        handleChange({ name: e.target.name, value: e.target.value });
      }, 1000);
    };
  };
  const optimizedDebounce = useMemo(() => debounce(), []);
  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          {/* search position */}

          <FormRow
          labelText=""
            type="text"
            name="search"
            value={localSearch}
            handleChange={optimizedDebounce}
          />
          {/* search by status */}
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;

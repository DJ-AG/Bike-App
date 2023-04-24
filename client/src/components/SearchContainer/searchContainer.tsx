import { FormRow } from "../index";
import { useState, useMemo } from "react";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import { useAction } from "../../hooks/useActions";
import Wrapper from "./searchContainer_wrapper";
interface SearchContainerProps {
  page: string;
}
const SearchContainer: React.FC<SearchContainerProps> = ({ page }) => {
  const [localSearch, setLocalSearch] = useState("");
  const { isLoading } = useTypedSelector((state) => state.stations);
  const { handleChange, clearFilters } = useAction();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLocalSearch("");
    clearFilters();
  };
  const debounce = () => {
    let timeoutID: any;
    return (e: any) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        handleChange({ name: e.target.name, value: e.target.value });
      }, 1000);
    };
  };

  let label = "";
  if (page === "station") {
    label = "Search Station";
  }
  if (page === "jorney") {
    label = "Search by departure station";
  }

  const optimizedDebounce = useMemo(() => debounce(), []);
  return (
    <Wrapper>
      <form className="form">
        <div className="form-center">
          <FormRow
            labelText={label}
            type="text"
            name="search"
            value={localSearch}
            handleChange={optimizedDebounce}
          />
          
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

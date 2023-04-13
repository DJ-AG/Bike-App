import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useAction } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import Wrapper from "./pageBtnContainer_wrapper";

interface PageBtnContainerProps {
  value: any;
}

const PageBtnContainer: React.FC<PageBtnContainerProps> = ({value}) => {
  const { changePage } = useAction();
  const { numOfPages, page, pageLimit } = useTypedSelector(
    (state) => state.stations
  );
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(value / pageLimit); i++) {
    pageNumbers.push(i);
  }
  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    changePage(newPage);
  };
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    changePage(newPage);
  };
  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div>
        <h2>
          {page} of {Math.ceil(value / 10)}
        </h2>
      </div>
      <button className="next-btn" onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;

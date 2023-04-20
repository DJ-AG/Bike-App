import Wrapper from "./jorneyInfo_wrapper";

interface StationInfoProps {
  text: string;
}

const StationInfo: React.FC<StationInfoProps> = ({ text }) => {
  return (
    <Wrapper>
      <span className="text">{text}</span>
    </Wrapper>
  );
};

export default StationInfo;

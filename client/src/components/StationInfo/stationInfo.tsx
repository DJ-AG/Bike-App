import Wrapper from "./stationInfo_wrapper";

interface StationInfoProps {
  icon: any;
  text: string;
}

const StationInfo: React.FC<StationInfoProps> = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </Wrapper>
  );
};

export default StationInfo;

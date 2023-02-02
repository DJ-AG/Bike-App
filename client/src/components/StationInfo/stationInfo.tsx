import Wrapper from "./stationInfo_wrapper";

const StationInfo = ({ icon, text }: { icon: any; text: string }) => {
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </Wrapper>
  );
};

export default StationInfo;

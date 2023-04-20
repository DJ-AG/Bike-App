import TimeFixer from "../../utils/TimeImplementUtil";
import Wrapper from './longestJorney_wrapper'

interface LongestJorneyProps {
  distants: number;
  from: string;
  to: string;
  time: any;
}

const LongestJorney: React.FC<LongestJorneyProps> = ({
  from,
  to,
  distants,
  time,
}) => {
  let duration = TimeFixer(time);
  return (
    <Wrapper>
      <div>
        Longest journey ever made was from {from} to {to} in {duration} distance
        was {distants} Meters
      </div>
    </Wrapper>
  );
};

export default LongestJorney;

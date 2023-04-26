import Wrapper from "./dashboard_wrapper";
const Stats = () => {return (
    <Wrapper>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Bike Station <span>tracking</span> app
          </h1>
          <p>
            Welcome to Bike Station Tracking App the idea of this app is to help
            keep track of all stations in Helsinki / Espoo, find out where are
            the Station located and what is the farthest jorney a person has
            done on a Helsinki City Bike
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Stats;



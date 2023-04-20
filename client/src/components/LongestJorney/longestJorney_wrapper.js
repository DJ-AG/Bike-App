import styled from "styled-components";

const Wrapper = styled.article`
  background: var(--white);
  box-shadow: var(--shadow-2);
  margin-bottom:2rem;
  }
  .info {
    h5 {
      margin-bottom: 0.25rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: var(--grey-400);
      letter-spacing: var(--letterSpacing);
    }
  }

  
`;

export default Wrapper;
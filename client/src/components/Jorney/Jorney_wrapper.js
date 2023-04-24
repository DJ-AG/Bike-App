import styled from "styled-components";

const Wrapper = styled.article`
background: var(--white);
border-radius: var(--borderRadius);
display: grid;
grid-template-rows: 1fr auto;
box-shadow: var(--shadow-2);
.content {
  padding: 1rem 1.5rem;
}
.content-center {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 0.5rem;
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr;
  }
}
}
`;

export default Wrapper;

import styled from "styled-components";

const Wrapper = styled.div`
  z-index: 100;
  position: fixed;
  top: 22vh;
  left: 10%;
  width: 80%;
  background: white;
  box-shadow: var(--shadow-2);
  border-radius: 8px;
  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
  .close-btn {
    color: var(--red-dark);
    background: var(--green-light);
    margin-right: 0.5rem;
    width:10%;
    margin-left:80%;
    background:none;
    box-shadow:unset;
    
  }
  header {
    width: 100%;
    padding: 1rem 0.5rem;
    background: var(--primary-500);
    color: white;
  }

  h2 {
    margin: 0.5rem;
  }

  form {
    padding: 1rem 0.5rem;

    footer {
      padding: 1rem 0.5rem;
    }

    .modal-enter {
      transform: translateY(-10rem);
      opacity: 0;
    }

    .modal-enter-active {
      transform: translateY(0);
      opacity: 1;
      transition: all 200ms;
    }

    .modal-exit {
      transform: translateY(0);
      opacity: 1;
    }

    .modal-exit-active {
      transform: translateY(-10rem);
      opacity: 0;
      transition: all 200ms;
    }
    
  }
`;

export default Wrapper;

import { useState, useEffect } from "react";
import FormRow from "../../components/FormRow/FormRow";
import Wrapper from "./Register_wrapper";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e: any) => {
    console.log(e.target);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <h3>Login</h3>
        <FormRow
          type="text"
          value={values.name}
          name="name"
          handleChange={handleChange}
          labelText="name"
        />
        <FormRow
          type="text"
          value={values.password}
          name="password"
          handleChange={handleChange}
          labelText="password"
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;

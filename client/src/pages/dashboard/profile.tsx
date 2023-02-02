/* Profile page is under construction */

import { useState } from "react";
import { FormRow, Alert } from "../../components";
import Wrapper from "./dashboard_wrapper";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import { useAction } from "../../hooks/useActions";
const Profile = () => {
  const { user, showAlert, isLoading } = useTypedSelector(
    (state) => state.users
  );
  const { displayAlert } = useAction();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);

  return (
    <Wrapper>
      <form className="form">
        <h3>profile</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            value={name}
            handleChange={(e) => setName(e.target.value)}
            labelText={""}
          />
          <FormRow
            type="email"
            name="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
            labelText={""}
          />
          <button className="btn btn-block" type="submit" disabled={isLoading}>
            {isLoading ? "Please Wait..." : "save changes"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CurrentUserContext from "../../context/userContext";

function Navigation() {
  const { user, setUser } = useContext(CurrentUserContext);

  const handleDisconnection = () => {
    localStorage.clear();
    setUser({});
  };
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {user.email ? (
        <div className="navigation">
          <NavLink to="/">
            <button
              type="button"
              className="disconnect"
              onClick={handleDisconnection}
            >
              <img src="\src\assets\logout.png" alt="" />
            </button>
          </NavLink>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Navigation;

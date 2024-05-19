import { useState } from "react";

const UserContainer = ({ name = null, login = false }) => {
  const [user, setUser] = useState(name);
  const [IsLogging, setIsLogging] = useState(login);

  //   setUser("shahab");

  const handleLogin = () => {
    if (IsLogging) {
      console.log(IsLogging);
      setUser(null);
      setIsLogging(false);
    }
    if (!IsLogging) {
      console.log(IsLogging);
      setUser(name);
      setIsLogging(true);
    }
  };
  if (user && IsLogging) {
    return (
      <div className="flex justify-between items-center ml-2">
        <h4 className="capitalize">welcome {user}</h4>
        <button
          type="button"
          className="btn bg-blue-300 ml-2 "
          onClick={handleLogin}
        >
          Log out
        </button>
      </div>
    );
  }
  if (!user && !IsLogging) {
    return (
      <div className="flex justify-between items-center">
        <h4 className="capitalize">please login</h4>
        <button
          type="button"
          className="btn bg-blue-300 ml-2"
          onClick={handleLogin}
        >
          Log in
        </button>
      </div>
    );
  }
};
export default UserContainer;

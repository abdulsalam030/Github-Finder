import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";
function User() {
  const { user, getUser } = useContext(GithubContext);
  console.log(user);
  const params = useParams();
  useEffect(() => {
    getUser(params.login);
  }, []);
  return <div>{user.id}</div>;
}

export default User;

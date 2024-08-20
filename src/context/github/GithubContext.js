import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducers";
import { type } from "@testing-library/user-event/dist/type";
const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Get initial Users (testing purpose)
  const fetchUsers = async () => {
    setLoading();
    const res = await fetch(`${GITHUB_URL}/users`);
    const data = await res.json();
    // console.log(data);
    // setUsers(data);
    // setLoading(false);

    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };

  //SET_LOADING
  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

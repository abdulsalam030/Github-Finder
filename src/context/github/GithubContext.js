import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducers";
const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Get searched users
  const searchUsers = async (text) => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });
    const res = await fetch(`${GITHUB_URL}/search/users?${params}`);
    const { items } = await res.json();
    // console.log(data);
    // setUsers(data);
    // setLoading(false);

    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  //SET_LOADING
  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  // CLEAR USERS
  const clearUsers = () =>
    dispatch({
      type: "CLEAR_USERS",
    });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

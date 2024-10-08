import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducers";
const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
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

  // Get single users
  const getUser = async (login) => {
    setLoading();
    const res = await fetch(`${GITHUB_URL}/users/${login}`);
    console.log(res);
    if (res === 404) {
      window.location = "/Notfound";
    } else {
      const data = await res.json();
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
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
        user: state.user,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

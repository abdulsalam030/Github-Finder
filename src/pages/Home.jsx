import React from "react";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

function Home() {
  return (
    <div>
      <UserResults />
      <UserSearch />
    </div>
  );
}

export default Home;

import React from "react";
import { UserContext } from "./UserContext";
import Dashboard from "./Dashboard";

function App() {
  const user = "Intern User";

  return (
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
}

export default App;

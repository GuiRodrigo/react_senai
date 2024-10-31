import React from "react";
import RoutesApp from "./routes/routes";
import { AppProvider } from "./hooks/index";

function App() {
  return (
    <AppProvider>
      <RoutesApp />
    </AppProvider>
  );
}

export default App;

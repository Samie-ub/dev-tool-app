import { Analytics } from "@vercel/analytics/react";
import Layout from "./layout/Layout";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout />
      <Analytics />
    </div>
  );
}

export default App;

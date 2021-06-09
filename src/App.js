import "@/theme/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "@/pages/Homepage";

const App = () => {
  return (
    <>
      <Router>
        <Route path={"/"} component={Homepage} exact />
      </Router>
    </>
  );
};

export default App;

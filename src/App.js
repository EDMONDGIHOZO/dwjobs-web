import "@/theme/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "@/pages/Homepage";
import Category from "@/pages/Category";

const App = () => {
  return (
    <>
      <Router>
        <Route path={"/"} component={Homepage} exact />
        <Route path={"/category/:slug"} component={Category} />
      </Router>
    </>
  );
};

export default App;

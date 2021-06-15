import "@/theme/App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "@/pages/Homepage";
import Category from "@/pages/Category";
import Jobs from "./pages/Jobs";
import Recruit from "./pages/Recruiter";
import Login from "./pages/User/Login";
import Join from "./pages/User/Join";

const App = () => {
  return (
    <>
      <Router>
        <Route path={"/"} component={Homepage} exact />
        <Route path={"/category/:slug"} component={Category} />
        <Route path={"/jobs"} component={Jobs} />
        <Route path={"/recruit"} component={Recruit} />
        <Route path={"/join"} component={Join} />
        <Route path={"/login"} component={Login} />
      </Router>
    </>
  );
};

export default App;

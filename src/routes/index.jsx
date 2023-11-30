import { createBrowserRouter } from "react-router-dom";
import signup from './signup';
import login from './login';
import upgrade from "./upgrade";
import dashboard from "./dashboard"
import home from "./home";

const router = createBrowserRouter([signup, login, home, upgrade, dashboard])


export default router;
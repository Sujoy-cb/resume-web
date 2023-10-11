import { createBrowserRouter } from "react-router-dom";
import signup from './signup';
import login from './login';
import home from "./home";

const router = createBrowserRouter([signup, login, home])


export default router;
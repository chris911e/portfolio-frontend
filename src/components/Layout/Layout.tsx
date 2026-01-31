import { Outlet } from "react-router";
import Taskbar from "./Taskbar";
import Footer from "./Footer";

export default function Layout() {
    return(
        <div>
            <Taskbar />
            <Outlet />
            <Footer />
        </div>
    )
}
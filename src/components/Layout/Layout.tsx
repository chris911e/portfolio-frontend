import { Outlet } from "react-router";

export default function Layout() {
    return(
        <div>
            <div>
                Taskbar test
            </div>
            <Outlet />
            <div>
                Footer test
            </div>
        </div>
    )
}
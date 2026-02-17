import { Outlet } from "react-router";
import Taskbar from "./Taskbar";
import Footer from "./Footer";

export default function Layout() {
    return(
        <div className="flex flex-col min-h-screen select-none">
            <Taskbar />
            <main className="flex-1 flex items-center justify-center">
                <div className="min-w-xs md:w-full max-w-5xl m-10">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    )
}
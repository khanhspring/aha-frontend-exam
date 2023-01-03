import { Outlet } from "react-router-dom";
import Footer from "./footer";
import SideBar from "./sidebar";

export default function PrimaryLayout() {
    return (
        <>
            <div className="flex min-h-[100vh] items-stretch">
                <SideBar />
                <div className="w-full md:w-[calc(100%_-_80px)] flex flex-col dark:bg-cinder-900">
                    <main className="w-full flex-1 py-7 px-7">
                        <Outlet />
                    </main>
                    <div className="w-full">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}

import { Link } from "react-router-dom";

function SideBar() {
    return (
        <div className="w-[80px] bg-cod-gray-700 pt-10 flex flex-col items-center gap-2">
            <Link to={"/"} className="w-full">
                <div className="flex flex-col gap-0.5 justify-center items-center w-full h-[70px] cursor-pointer group/menu-item">
                    <i className="fi fi-sr-home group-hover/menu-item:text-azure-radiance-900"></i>
                    <span className="text-xs text-white/50 group-hover/menu-item:text-azure-radiance-900">Home</span>
                </div>
            </Link>
            <Link to={"/password"} className="w-full">
                <div className="flex flex-col gap-0.5 justify-center items-center w-full h-[70px] cursor-pointer group/menu-item">
                    <i className="fi fi-sr-password group-hover/menu-item:text-azure-radiance-900"></i>
                    <span className="text-xs text-white/50 group-hover/menu-item:text-azure-radiance-900">Password</span>
                </div>
            </Link>
            <Link to={"/calendar"} className="w-full">
                <div className="flex flex-col gap-0.5 justify-center items-center w-full h-[70px] cursor-pointer group/menu-item">
                    <i className="fi fi-sr-subtitles group-hover/menu-item:text-azure-radiance-900"></i>
                    <span className="text-xs text-white/50 group-hover/menu-item:text-azure-radiance-900">Calendar</span>
                </div>
            </Link>
            <Link to={"/date-picker"} className="w-full">
                <div className="flex flex-col gap-0.5 justify-center items-center w-full h-[70px] cursor-pointer group/menu-item">
                    <i className="fi fi-sr-calendar group-hover/menu-item:text-azure-radiance-900"></i>
                    <span className="text-xs text-white/50 group-hover/menu-item:text-azure-radiance-900">Date picker</span>
                </div>
            </Link>
            <Link to={"/thank-you"} className="w-full">
                <div className="flex flex-col gap-0.5 justify-center items-center w-full h-[70px] cursor-pointer group/menu-item">
                    <i className="fi fi-sr-heart group-hover/menu-item:text-azure-radiance-900"></i>
                    <span className="text-xs text-white/50 group-hover/menu-item:text-azure-radiance-900">Thank you</span>
                </div>
            </Link>
        </div>
    );
}

export default SideBar;

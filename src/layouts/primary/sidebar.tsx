import { Link } from "react-router-dom";

function SideBar() {
    return (
        <div className="w-[80px] bg-cod-gray-700 pt-10 flex flex-col items-center gap-2">
            <Link to={"/"}>
                <div className="flex flex-col gap-1 justify-center items-center w-full h-[70px] cursor-pointer group/menu-item hover:text-azure-radiance-900">
                    <i className="fi fi-sr-home"></i>
                    <span className="text-xs text-white/50 group-hover/menu-item:text-azure-radiance-900">Home</span>
                </div>
            </Link>
            <Link to={"/password"}>
                <div className="flex flex-col gap-1 justify-center items-center w-full h-[70px] cursor-pointer group/menu-item hover:text-azure-radiance-900">
                    <i className="fi fi-sr-password"></i>
                    <span className="text-xs text-white/50 group-hover/menu-item:text-azure-radiance-900">Password</span>
                </div>
            </Link>
            <Link to={"/calendar"}>
                <div className="flex flex-col gap-1 justify-center items-center w-full h-[70px] cursor-pointer group/menu-item hover:text-azure-radiance-900">
                    <i className="fi fi-sr-subtitles"></i>
                    <span className="text-xs text-white/50 group-hover/menu-item:text-azure-radiance-900">Calendar</span>
                </div>
            </Link>
            <Link to={"/date-picker"}>
                <div className="flex flex-col gap-1 justify-center items-center w-full h-[70px] cursor-pointer group/menu-item hover:text-azure-radiance-900">
                    <i className="fi fi-sr-calendar"></i>
                    <span className="text-xs text-white/50 group-hover/menu-item:text-azure-radiance-900">Date picker</span>
                </div>
            </Link>
        </div>
    );
}

export default SideBar;

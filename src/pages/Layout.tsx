import { NavLink, Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            <aside className="w-full md:w-64 bg-[#264653] text-white p-6 space-y-6">
                <h2 className="text-2xl font-bold mb-4">Projects</h2>
                <nav className="space-y-2">
                    <NavLink to="/" end className={({ isActive }) => isActive ? "block px-4 py-2 bg-[#2A9D8F] rounded transition-colors duration-200"
                        : "block px-4 py-2 hover:bg-[#2A9D8F]/60 rounded"}>QuickCart - Awful UI</NavLink>
                    <NavLink to="/theme-toggler" className={({ isActive }) => isActive ? "block px-4 py-2 bg-[#2A9D8F] rounded transition-colors duration-200"
                        : "block px-4 py-2 hover:bg-[#2A9D8F]/60 rounded"}>Theme Magic</NavLink>
                </nav>
            </aside>
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
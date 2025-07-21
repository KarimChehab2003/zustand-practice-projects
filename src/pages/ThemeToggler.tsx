import { FaRegMoon } from "react-icons/fa";
import { selectTheme, selectToggleTheme, useThemeStore } from "../store/theme-store";
import { IoMdSunny } from "react-icons/io";

function ThemeToggler() {

    const isDarkTheme = useThemeStore(selectTheme);
    const toggleTheme = useThemeStore(selectToggleTheme)

    return (
        <main className={`min-h-screen flex justify-center items-center p-2 md:p-8 bg-gradient-to-br ${isDarkTheme ? "from-gray-900 via-purple-950 to-indigo-950" : "from-yellow-100 via-pink-100 to-purple-100"} relative overflow-hidden inter transition-colors duration-300`}>
            {/* Blobs */}
            <div className="absolute -top-20 -left-20  w-64 h-64 rounded-3xl animate-float blur-3xl bg-pink-300/30"></div>
            <div className="absolute top-1/2 -right-32 w-92 h-92 rounded-3xl animate-float blur-3xl bg-blue-300/20"></div>

            {/* Card */}
            <section className={`${isDarkTheme ? "bg-white/80" : "bg-white"} p-8 max-w-lg w-full relative z-10 rounded-2xl space-y-4 transition-colors duration-300 overflow-hidden shadow-lg`}>
                {/* More Blobs */}
                <div className={`absolute top-10 -left-6 w-16 h-16 ${isDarkTheme ? "bg-indigo-600" : "bg-yellow-300"} animate-float blob1 transition-colors duration-300`}></div>
                <div className={`absolute bottom-20 -right-8 w-20 h-20 ${isDarkTheme ? "bg-purple-600" : "bg-pink-300"}  blob2 animate-float transition-colors duration-300`}></div>

                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Theme Magic</h1>
                    <button className={` px-3.5 py-1.5 rounded cursor-pointer bg-gradient-to-r ${isDarkTheme ? "from-yellow-100 via-pink-100 to-purple-100 text-[#333]" : "from-gray-900 via-purple-950 to-indigo-950 text-white"} font-medium shadow-md hover:shadow-lg transition-all duration-300`} onClick={toggleTheme}>Switch to {isDarkTheme ? "Light" : "Dark"} theme</button>
                </div>
                <p className="text-gray-700 text-lg ">Switch between light and dark to see the magic happen! ✨</p>

                <article className={`p-5 rounded-2xl bg-gradient-to-r from-pink-100 to-purple-100 border-2 border-pink-200 $ transition-colors duration-500 space-y-2`}>
                    <div className="flex items-center space-x-4">
                        <figure className="space-x-2 bg-pink-500 tex-white inline-block p-2 text-white rounded-full">
                            <IoMdSunny />
                        </figure>
                        <span className="text-pink-600 font-semibold text-xl">Light Mode</span>
                    </div>
                    <p className="text-pink-700/70 text-lg">Perfect for daytime browsing with bright, cheerful colors!</p>
                </article>

                <article className={`p-5 rounded-2xl bg-gradient-to-r from-purple-100 to-blue-100 border-2 border-purple-200 $ transition-colors duration-500 space-y-2`}>
                    <div className="flex items-center space-x-4">
                        <figure className="space-x-2 bg-purple-500 tex-white inline-block p-2 text-white rounded-full">
                            <FaRegMoon />
                        </figure>
                        <span className="text-purple-600 font-semibold text-xl">Light Mode</span>
                    </div>
                    <p className="text-purple-700/70 text-lg">Easy on the eyes with soothing dark tones for nighttime!</p>
                </article>

                <div className={`flex flex-col justify-center items-center p-4 ${!isDarkTheme ? "bg-amber-300 text-amber-700" : "bg-indigo-300 text-indigo-700"} rounded-2xl space-y-2 transition-colors duration-300`}>
                    <div className="text-2xl">
                        {isDarkTheme ? <FaRegMoon /> : <IoMdSunny />}
                    </div>
                    <p>Current theme: <span className="font-semibold">{isDarkTheme ? "Dark" : "Light"} Mode</span></p>
                </div>
            </section>
        </main>
    );
}

export default ThemeToggler;
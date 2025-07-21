import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import QuickCart from "./pages/QuickCart";
import ThemeToggler from "./pages/ThemeToggler";


function App() {


    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<QuickCart />} />
                    <Route path="theme-toggler" element={<ThemeToggler />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
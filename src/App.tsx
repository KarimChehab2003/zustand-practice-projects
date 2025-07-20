import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import QuickCart from "./pages/QuickCart";


function App() {


    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<QuickCart />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
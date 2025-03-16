import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Depositions } from '../pages/Depositions';


export function Router() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/depositions" element={<Depositions />} />
               
            </Routes>
        </HashRouter>
    );
}
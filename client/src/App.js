import {Route, Routes} from "react-router-dom";

import {Layout} from "./components";
import {HomePage, LoginPage, RegisterPage} from "./pages";
import {UserContextProvider} from "./contexts";
import './App.css';


function App() {
    return (
        <UserContextProvider>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'/login'} element={<LoginPage/>}/>
                    <Route path={'/register'} element={<RegisterPage/>}/>
                </Route>
            </Routes>
        </UserContextProvider>
    );
}

export default App;

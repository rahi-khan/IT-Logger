import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { useEffect } from "react";
import AddBtn from "./components/layout/AddBtn";
import SearchBar from "./components/layout/SearchBar";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import Logs from "./components/logs/Logs";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";

const App = () => {
    //! Initialize Materialize JS
    useEffect(() => M.AutoInit());

    return (
        <>
            <SearchBar />
            <div className="container">
                <Logs />
                <AddBtn />
                <AddLogModal />
                <EditLogModal />
                <AddTechModal />
                <TechListModal />
            </div>
        </>
    );
};

export default App;

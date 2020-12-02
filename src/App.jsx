import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { useEffect } from "react";
import AddBtn from "./components/layout/AddBtn";
import SearchBar from "./components/layout/SearchBar";
import AddLogModal from "./components/logs/AddLogModal";
import Logs from "./components/logs/Logs";

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
            </div>
        </>
    );
};

export default App;

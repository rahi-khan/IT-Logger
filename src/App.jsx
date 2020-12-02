import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { useEffect } from "react";
import SearchBar from "./components/layout/SearchBar";

const App = () => {
    //! Initialize Materialize JS
    useEffect(() => M.AutoInit());

    return (
        <>
            <SearchBar />
        </>
    );
};

export default App;

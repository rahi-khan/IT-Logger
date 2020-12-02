import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { useEffect } from "react";

const App = () => {
    //! Initialize Materialize JS
    useEffect(() => M.AutoInit());

    return (
        <div>
            <h1>IT Logger</h1>
        </div>
    );
};

export default App;

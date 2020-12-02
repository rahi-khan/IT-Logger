import Axios from "axios";
import { useEffect, useState } from "react";
import Preloader from "../layout/Preloader";
import LogItem from "./LogItem";

const Logs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    //! get the logs data[Arr] from the database
    useEffect(
        () =>
            (async () => {
                setLoading(true);

                const res = await Axios.get("/logs");
                const data = await res.data;

                setLogs(data);
                setLoading(false);
            })(),
        []
    );

    //! show preloader if loading
    //! else for each log item{Obj} show a logitem with data
    return loading ? (
        <Preloader />
    ) : (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs 💻</h4>
            </li>

            {logs.length === 0 ? (
                <h5 className="center">No Logs To Show 😢</h5>
            ) : (
                logs.map(log => <LogItem log={log} key={log.id} />)
            )}
        </ul>
    );
};

export default Logs;

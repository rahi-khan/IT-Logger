import Axios from "axios";
import { useEffect, useState } from "react";
import TechItem from "./TechItem";

const TechListModal = () => {
    const [techs, setTechs] = useState([]);

    //! get the logs data[Arr] from the database
    useEffect(
        () =>
            (async () => {
                const res = await Axios.get("/techs");
                const data = await res.data;
                setTechs(data);
            })(),
        []
    );

    //! show preloader if loading
    //! else for each log item{Obj} show a logitem with data
    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>

                <ul className="collection">
                    {techs.length === 0 ? (
                        <h5 className="center">No Logs To Show 😢</h5>
                    ) : (
                        techs.map(tech => <TechItem tech={tech} key={tech.id} />)
                    )}
                </ul>
            </div>
        </div>
    );
};

export default TechListModal;

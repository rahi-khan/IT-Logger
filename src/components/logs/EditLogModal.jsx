import { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const EditLogModal = () => {
    const [message, setMessage] = useState("");
    const [tech, setTech] = useState("");
    const [attention, setAttention] = useState(false);

    const onSubmit = () => {
        if (message === "" || tech === "") {
            M.toast({ html: "Please enter a message and tech" });
        } else {
            M.toast({ html: `Log added by ${tech}` });

            //// Clear Fields
            setMessage("");
            setTech("");
            setAttention(false);
        }
    };

    const modalStyle = {
        width: "75%",
        height: "75%",
    };

    return (
        <div id="edit-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                {/*//// Modal Header */}
                <h4>Edit System Log</h4>

                {/*//// Log Message Input[Text] */}
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                        <label htmlFor="message" className="active">
                            Log Message
                        </label>
                    </div>
                </div>

                {/*//// Select Technician Input[Dropdown] */}
                <div className="row">
                    <div className="input-field">
                        <select
                            name="tech"
                            value={tech}
                            className="browser-default"
                            onChange={e => setTech(e.target.value)}
                        >
                            <option value="" disabled>
                                Select Technician
                            </option>
                            {/* <TechSelectOptions /> */}
                            <option value="Rahi Khan">Rahi Khan</option>
                            <option value="Rahi Khan">Mahek Khan</option>
                            <option value="Rahi Khan">Aaltee</option>
                        </select>
                    </div>
                </div>

                {/*//// Needs Attention Input[Checkbox] */}
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input
                                    type="checkbox"
                                    className="filled-in"
                                    checked={attention}
                                    value={attention}
                                    onChange={e => setAttention(!attention)}
                                />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>

                {/*//// Enter Button [Submit] */}
                <div className="modal-footer">
                    <a
                        href="#!"
                        onClick={onSubmit}
                        className="modal-close waves-effect blue waves-light btn"
                    >
                        Enter
                    </a>
                </div>
            </div>
        </div>
    );
};

export default EditLogModal;

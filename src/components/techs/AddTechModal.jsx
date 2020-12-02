import { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const onSubmit = () => {
        if (firstName === "" || lastName === "") {
            M.toast({ html: "Please enter first and last name" });
        } else {
            // const newLog = {
            //     message,
            //     attention,
            //     tech,
            //     date: new Date(),
            // };

            // addLog(newLog);

            //// Clear Fields
            setFirstName("");
            setLastName("");
        }
    };

    const modalStyle = {
        width: "75%",
        height: "75%",
    };

    return (
        <div id="add-tech-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                {/*//// Modal Header */}
                <h4>New Technician</h4>

                {/*//// First Name Input[Text] */}
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                        <label htmlFor="firstName" className="active">
                            Enter First Name
                        </label>
                    </div>
                </div>

                {/*//// First Name Input[Text] */}
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                        <label htmlFor="lastName" className="active">
                            Enter Last Name
                        </label>
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

export default AddTechModal;

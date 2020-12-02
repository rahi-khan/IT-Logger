const TechItem = ({ tech }) => {
    return (
        <li className="collection-item">
            <div>
                {tech.firstName} {tech.lastName}
                <a
                    href="#!"
                    className="secondary-content"
                    // onClick={onDelete}
                >
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    );
};

export default TechItem;

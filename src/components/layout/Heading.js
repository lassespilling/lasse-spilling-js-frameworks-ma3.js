import React from "react"; // Import react
const Heading = ({ content, icon }) => {
    // Receives content as prop child
    return (
        <h1 className="text-center">
            <i className={icon}></i>
            {content}
        </h1> // Renders content as h1
    );
};

export default Heading; // Export

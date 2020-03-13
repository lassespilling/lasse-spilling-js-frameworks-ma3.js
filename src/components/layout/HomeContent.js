import React from "react"; // Import react

const HomeContent = ({ children }) => {
    // Receives all prop children
    return (
        <div>
            <p>{children}</p>
        </div>
    );
};

export default HomeContent; // Export

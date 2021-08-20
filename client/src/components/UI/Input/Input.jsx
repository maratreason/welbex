import React from "react";
import "./Input.css";

const Input = ({searchQuery, setSearchQuery}) => {
    return (
        <input
            className="input"
            type="text"
            placeholder="Поиск..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
        />
    );
};

export default Input;

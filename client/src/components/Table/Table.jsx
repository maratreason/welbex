import React from "react";
import "./Table.css";

const Table = ({cities, isLoading}) => {
    
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Count</th>
                    <th>Distance</th>
                </tr>
            </thead>
            <tbody>
                {isLoading 
                ? <tr className="loading"><td colSpan="4">Идет загрузка...</td></tr>
                : cities.map(elem => 
                    <tr key={elem.id}>
                        <td>{new Date(elem.date).toLocaleDateString()}</td>
                        <td>{elem.title}</td>
                        <td>{elem.count}</td>
                        <td>{elem.distance} км</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default Table;

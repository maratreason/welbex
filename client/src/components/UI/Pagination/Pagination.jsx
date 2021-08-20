import React from "react";
import {getPagesArray} from "../../utils/pages";
import "./Pagination.css";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div className="page__wrapper">
            {pagesArray.map((p) => (
                <span onClick={() => changePage(p)} key={p} className={page === p ? "page page__current" : "page"}>
                    {p + 1}
                </span>
            ))}
        </div>
    );
};

export default Pagination;

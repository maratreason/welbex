import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../components/Table/Table";
import Input from "../components/UI/Input/Input";
import Select from "../components/UI/Select/Select";
import Pagination from "../components/UI/Pagination/Pagination";
import { getPageCount } from "../components/utils/pages";

const Main = () => {
    /**
     * Данные для селектов\
     */
    const [options, setOptions] = useState([
        {id: 1, name: "Названию", value: "title"},
        {id: 2, name: "Количеству", value: "count"},
        {id: 3, name: "Расстоянию", value: "distance"},
    ]);
    const [sortOptions, setSortOptions] = useState([
        {id: 1, name: "По возрастанию", value: "ASC"},
        {id: 2, name: "По убыванию", value: "DESC"},
    ]);

    /**
     * Данные для фильтрации
     */
    const [sortFieldOption, setSortFieldOption] = useState("Выберите из списка");
    const [sortOption, setSortOption] = useState("Выберите из списка");
    const [searchQuery, setSearchQuery] = useState("");
    
    /**
     * Loading. 
     */
    const [isLoading, setIsLoading] = useState(false);

    /**
     * Данные для пагинации
     */
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(5);
    const [totalPages, setTotalPages] = useState(0);

    /**
     * Переключение страницы
     * @param {number} page 
     */
    const changePage = (page) => {
        setPage(page);
    }

    const [cities, setCities] = useState([]);

    const fetchData = async (page, limit, sortFieldOption, sortOption, search) => {
        setIsLoading(true);
        try {
            const {data} = await axios.get("http://localhost:5000/api/cities/", {
                params: {
                    page,
                    limit,
                    sortBy: sortFieldOption,
                    mode: sortOption,
                    search,
                }
            });

            const totalCount = data.total;
            setCities(data.cities);
            setTotalPages(getPageCount(totalCount, limit));
            setIsLoading(false);
        } catch(e) {
            console.err(e.message);
        } finally {
            setIsLoading(false);
        }
    } 

    useEffect(() => {
        fetchData(page, limit, sortFieldOption, sortOption, searchQuery);
    }, [page, limit, sortFieldOption, sortOption, searchQuery])

    return (
        <div>
            <div className="mainpage-filters">
                <Input
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
                <Select
                    options={options}
                    setOption={setSortFieldOption}
                    defaultOption={"Выберите поле"}
                />
                <Select
                    options={sortOptions}
                    setOption={setSortOption}
                    defaultOption={"Выберите как сортировать"}
                />
            </div>

            <Table cities={cities} isLoading={isLoading} />

            <Pagination
                totalPages={totalPages}
                page={page}
                changePage={changePage}
            />
        </div>
    );
};

export default Main;

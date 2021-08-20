const {Router} = require("express");
const connection = require("../settings/db");
const router = Router({ mergeParams: true });

/**
 * Получаем список городов
 */
router.get("/", (req, res) => {
    /**
     * Запрос по умолчанию
     */
    let query = "SELECT * FROM cities";
    /**
     * Стартовая позиция вывода. Страница 0
     */
    let page = 0;
    /**
     * Лимит элементов на страницу
     */
    let limit = req.query.limit;
    /**
     * Общее количество элементов в таблице
     */
    let totalCount = 0;

    try {
        connection.query(query, function (err, results, fields) {
            totalCount = +results.length;
        });
    } catch(e) {
        console.err(e.message);
    }

    /**
     * Если что-то вводим в поиск
     */
    if (req.query.search) {
        if (req.query.sortBy && req.query.sortBy != "Выберите из списка") {
            console.log("sortBy", req.query.sortBy)
            query += ` WHERE ${req.query.sortBy} LIKE '%${req.query.search}%'`;
        } else {
            query += ` WHERE title LIKE '%${req.query.search}%'`;
        }
    }

    /**
     * С какого элемента выводить. limit = 5 => page0 => с 1-5 записей
     */
    if (req.query.page) {
        page = +req.query.page * limit;
    }
    
    /**
     * Сколько элементов выводим на страницу
     */
    if (req.query.limit) {
        limit = +req.query.limit;
    }

    /**
     * Данные из сортировки
     */
    if (req.query.sortBy != "Выберите из списка" && req.query.mode != "Выберите из списка") {
        query += ` ORDER BY ${req.query.sortBy} ${req.query.mode}`;
    }

    /**
     * Дописываем лимит в итоговый запрос
     */
    query += ` LIMIT ${page}, ${limit}`;

    try {
        connection.query(query, function (err, results, fields) {
            res.json({
                cities: results,
                total: totalCount
            })
        });
    } catch(e) {
        console.err(e.message);
    }
});

module.exports = router;

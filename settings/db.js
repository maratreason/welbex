const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    database: "welbex",
    user: "root",
    password: "1111",
});

connection.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    } else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

// закрытие подключения
// connection.end(function (err) {
//     if (err) {
//         return console.log("Ошибка: " + err.message);
//     }
//     console.log("Подключение закрыто");
// });

module.exports = connection;

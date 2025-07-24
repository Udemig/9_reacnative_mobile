import SQLite from 'react-native-sqlite-storage';



export const db = SQLite.openDatabase(
    // database'imizin detayları
    { name: "mydb.db", location: "default" },
    // database'im başarıyla açıldığında çalışacak fonksiyon
    () => {
        console.log('Veritabanı açıldı');

        // transaction => komut bloğu anlamına gelir, içine çalıştırılacak birden fazla sql komutu girilebilir.
        db.transaction(tx => {
            //executeSql => sql kodu çalıştır anlamına gelir, içine girilen SQL stringini çalıştırır
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY, title TEXT, price REAL )'
            )
        })

    },
    // database'i açarken hata olduğunda çalışacak fonksiyon
    (err) => { console.log('DB açarken hata oluştu: ',err)}
)

console.log("database: ",db)
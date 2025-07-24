import { db } from "../db"

export const getSingleProduct = (productId,setProduct) => {

    console.log("get single product çalıştı")

    db.transaction(tx =>
        tx.executeSql(
            'SELECT * FROM products WHERE id = ?;',
            [productId],


            (_, { rows }) => {
                if (rows.length > 0) {
                    setProduct(rows.item(0))
                } else {
                    console.log('Ürün bulunamadı.')
                }
            },



            (err) => { console.log(err) }
        )
    )

}
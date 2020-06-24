import db from './connector';


function getAllProducts() {
    return new Promise(function (resolve, reject) {
        db.any('select * from products', [true])
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                console.log('ERROR:', error);
            })
    });
}

function updateProduct(ctx) {
    return new Promise(function (resolve, reject) {
        let { name, amount, description, pid } = ctx.request.body;
        console.log(ctx.request.body);  
        db.any('update products set name = $1, amount = $2, description = $3 where pid = $4', [name, amount, description, pid])
            .then(data => {
                console.log(data)
                resolve("Success");
            })
            .catch(error => {
                console.log('ERROR:', error);
                reject(error)
            })
    })
}

const productQuery = {
    getAllProducts,
    updateProduct
}

export default productQuery;
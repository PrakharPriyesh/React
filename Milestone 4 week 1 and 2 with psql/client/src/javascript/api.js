import axios from 'axios';



export const updateProductDetails = (data) => {
    return new Promise((resolve, reject) => {
        axios
            .post("/updateProduct", data)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                console.log(err);
                reject("Unable to fetch data");
            })
    })
}
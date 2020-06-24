import axios from 'axios';



export const updateProductDetails = (data) => {
    axios
        .post("/updateProduct", data)
        .then(res => {
            console.log("Response product", res)
        })
        .catch(err => {
            console.log(err)
        })
}
import axios from "../utilites/axios.config";

export const fetchProducts = async () => {
  const data =await axios.get("/product")
  return data 
};


export const postProduct = async(postData) =>{
       await axios.post("/product", postData)
}
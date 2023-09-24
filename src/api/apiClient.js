import axios from "axios"
const url="http://localhost:3200"
export const apiClient={
    patients:{
        create: async ()=>{
             const respuesta = await axios.post(url+"/patients")
             return respuesta.data
        }
    }
}
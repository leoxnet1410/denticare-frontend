import axios from 'axios';
const API_URL = "http://localhost:300";
export const ApiClient = {
    patients:{
        all: async ()=>{
            const response = await axios.get(API_URL + "/patients");
            return response.data;
        },
        find: (id)=>{},
        create: async (data)=>{
            const response = await axios.post(API_URL + "/patients", data);
            return response.data
        },
        update: (id)=>{},
        delete: (id)=>{},
    },
    medicalSessions:{
        all: ()=>{},
        find: (id)=>{},
        create: (data)=>{},
        update: (id)=>{},
        delete: (id)=>{},
    }
}


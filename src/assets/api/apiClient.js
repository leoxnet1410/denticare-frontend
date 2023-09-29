import axios from "axios";
const url = "http://localhost:3200";

export const apiClient = {
    patients: {
        create: async () => {
            try {
                const respuesta = await axios.post(url + "/patients");
                return respuesta.data;
            } catch (error) {
                console.error("Error al crear un paciente:", error);
                throw error; 
            }
        },
        update: async (patientId, updatedData) => {
            try {
                const respuesta = await axios.patch(url + `/patients/${patientId}`, updatedData);
                return respuesta.data;
            } catch (error) {
                console.error("Error al actualizar un paciente:", error);
                throw error; 
            }
        },
        delete: async (patientId) => {
            try {
                const respuesta = await axios.delete(url + `/patients/${patientId}`);
                return respuesta.data;
            } catch (error) {
                console.error("Error al eliminar un paciente:", error);
                throw error; 
            }
        },
        getAll: async () => {
            try {
                const respuesta = await axios.get(url + "/patients");
                return respuesta.data;
            } catch (error) {
                console.error("Error al obtener la lista de pacientes:", error);
                throw error; 
            }
        }
    }
};
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
    },
    medicalSessions: {
        create: async (data) => {
            try {
                const respuesta = await axios.post(url + "/medical_sessions", data);
                return respuesta.data;
            } catch (error) {
                console.error("Error al crear una sesión médica:", error);
                throw error;
            }
        },
        update: async (sessionId, updatedData) => {
            try {
                const respuesta = await axios.patch(url + `/medical_sessions/${sessionId}`, updatedData);
                return respuesta.data;
            } catch (error) {
                console.error("Error al actualizar una sesión médica:", error);
                throw error;
            }
        },
        delete: async (sessionId) => {
            try {
                const respuesta = await axios.delete(url + `/medical_sessions/${sessionId}`);
                return respuesta.data;
            } catch (error) {
                console.error("Error al eliminar una sesión médica:", error);
                throw error;
            }
        },
        getById: async (sessionId) => {
            try {
                const respuesta = await axios.get(url + `/medical_sessions/${sessionId}`);
                return respuesta.data;
            } catch (error) {
                console.error("Error al obtener una sesión médica por ID:", error);
                throw error;
            }
        },
        getAll: async () => {
            try {
                const respuesta = await axios.get(url + "/medical_sessions");
                return respuesta.data;
            } catch (error) {
                console.error("Error al obtener la lista de sesiones médicas:", error);
                throw error;
            }
        }
    }
};

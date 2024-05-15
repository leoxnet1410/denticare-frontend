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
            const respuesta = await axios.post(url + '/medical_sessions', data);
            return respuesta.data;
          } catch (error) {
            console.error('Error al crear una sesión médica:', error);
            throw error;
          }
        },
        update: async (sessionId, updatedData) => {
          try {
            const respuesta = await axios.patch(url + `/medical_sessions/${sessionId}`, updatedData);
            return respuesta.data;
          } catch (error) {
            console.error('Error al actualizar una sesión médica:', error);
            throw error;
          }
        },
        delete: async (sessionId) => {
          try {
            const respuesta = await axios.delete(url + `/medical_sessions/${sessionId}`);
            return respuesta.data;
          } catch (error) {
            console.error('Error al eliminar una sesión médica:', error);
            throw error;
          }
        },
        getById: async (sessionId) => {
          try {
            const respuesta = await axios.get(url + `/medical_sessions/${sessionId}`);
            return respuesta.data;
          } catch (error) {
            console.error('Error al obtener una sesión médica por ID:', error);
            throw error;
          }
        },
        getAll: async () => {
          try {
            const respuesta = await axios.get(url + '/medical_sessions');
            return respuesta.data;
          } catch (error) {
            console.error('Error al obtener la lista de sesiones médicas:', error);
            throw error;
          }
        },
      },
    
    doctors: {
        create: async (doctorData) => {
            try {
                const respuesta = await axios.post(url + "/doctors", doctorData);
                return respuesta.data;
            } catch (error) {
                console.error("Error al crear un doctor:", error);
                throw error;
            }
        },
        update: async (doctorId, updatedData) => {
            try {
                const respuesta = await axios.patch(url + `/doctors/${doctorId}`, updatedData);
                return respuesta.data;
            } catch (error) {
                console.error("Error al actualizar un doctor:", error);
                throw error;
            }
        },
        delete: async (doctorId) => {
            try {
                const respuesta = await axios.delete(url + `/doctors/${doctorId}`);
                return respuesta.data;
            } catch (error) {
                console.error("Error al eliminar un doctor:", error);
                throw error;
            }
        }
    }
}
const notes = {
    create: async (newNoteData) => {
      try {
        const response = await axios.post(url + "/notes", newNoteData);
        return response.data;
      } catch (error) {
        console.error("Error al crear una nota:", error);
        throw error;
      }
    },
    update: async (noteId, updatedData) => {
      try {
        const response = await axios.patch(url + `/notes/${noteId}`, updatedData);
        return response.data;
      } catch (error) {
        console.error("Error al actualizar una nota:", error);
        throw error;
      }
    },
    delete: async (noteId) => {
      try {
        const response = await axios.delete(url + `/notes/${noteId}`);
        return response.data;
      } catch (error) {
        console.error("Error al eliminar una nota:", error);
        throw error;
      }
    },
    getAll: async () => {
      try {
        const response = await axios.get(url + "/notes");
        return response.data;
      } catch (error) {
        console.error("Error al obtener la lista de notas:", error);
        throw error;
      }
    },
  
  treatments: {
    create: async () => {
        try {
            const respuesta = await axios.post(url + "/treatments");
            return respuesta.data;
        } catch (error) {
            console.error("Error al crear un tratamiento:", error);
            throw error;
        }
    },
    update: async (treatmentId, updatedData) => {
        try {
            const respuesta = await axios.patch(url + `/treatments/${treatmentId}`, updatedData);
            return respuesta.data;
        } catch (error) {
            console.error("Error al actualizar un tratamiento:", error);
            throw error;
        }
    },
    delete: async (treatmentId) => {
        try {
            const respuesta = await axios.delete(url + `/treatments/${treatmentId}`);
            return respuesta.data;
        } catch (error) {
            console.error("Error al eliminar un tratamiento:", error);
            throw error;
        }
    },
    getAll: async () => {
        try {
            const respuesta = await axios.get(url + "/treatments");
            return respuesta.data;
        } catch (error) {
            console.error("Error al obtener la lista de tratamientos:", error);
            throw error;
        }
    }
}
}

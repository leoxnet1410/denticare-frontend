import axios, { all } from 'axios';

const API_URL = 'http://localhost:5000';
export const ApiClient = {
  patients: {
    create: async (data) => {
      const res = await axios.post(API_URL + '/patients', data)
      return res.data
    },
    all: async () => {
      const res = await axios.get(API_URL + '/patients')
      return res.data
    },
    delete: async (id) => {
      const res = await axios.delete(API_URL + '/patients/' + id)
      return res.data
    },
    find: async (id) => {
      const res = await axios.get(API_URL + '/patients/' + id)
      return res.data
    }

  },
  appointments: {
    create: async (data) => {
      const res = await axios.post(API_URL + '/appointments', data)
      return res.data
    },
    all: async (params = {}) => {
      params = new URLSearchParams(params).toString()
      const res = await axios.get(API_URL + '/appointments?' + params)
      return res.data
    },
    update: async (id, data) => {
      const res = await axios.put(API_URL + '/appointments/' + id, data)
      return res.data
    },
  },
  billings: {
    create: async (data) => {
      const res = await axios.post(API_URL + '/billings', data)
      return res.data
    },
    all: async (params = {}) => {
      params = new URLSearchParams(params).toString()
      const res = await axios.get(API_URL + '/billings?' + params)
      return res.data
    }
  }
}
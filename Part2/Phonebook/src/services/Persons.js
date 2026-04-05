import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => axios.get(baseUrl).then(res => res.data)
const create = newObj => axios.post(baseUrl, newObj).then(res => res.data)
const remove = id => axios.delete(`${baseUrl}/${id}`) 
const update = (id, newObj) => axios.put(`${baseUrl}/${id}`, newObj).then(res => res.data) 

export default { getAll, create, remove, update }
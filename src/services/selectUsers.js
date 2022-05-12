import axios from "axios"

const selectUser = async(id, userObj) => {
    const URL = `https://users-crud1.herokuapp.com/users/${id}/`
    const req = await axios.get(URL, userObj)
    return req
} 

export default selectUser
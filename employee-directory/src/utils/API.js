import axios from 'axios';

//api routes
export default {
    getUsers: function () {
        return axios.get("https://randomuser.me/api/?results=200");
    }
}
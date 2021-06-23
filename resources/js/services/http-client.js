import axios from "axios";

export default class Client {

    async post(request){
        await axios.post(request.url, request.data)
        .then(res => {
            console.log(res)
        })
        .then(err => {
            console.log(err)
        })
    }

    async get(request){
        await axios.get(request.url)
            .then(res => {
                console.log(res)
            })
            .then(err => {
                console.log(err)
            })
    }

}
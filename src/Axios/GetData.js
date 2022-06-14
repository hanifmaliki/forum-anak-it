import axios from "axios";

export const getComments = async () => {
    let data = []
    await axios.get('http://localhost:3010/posts')
        .then(function (response) {
            data = response
        });
    return data?.data
}
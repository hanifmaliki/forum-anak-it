import axios from "axios";

export const getComments = async () => {
    let data = []
    await axios.get('https://forum-anak-it-hanif.herokuapp.com/api/posts')
        .then(function (response) {
            data = response
        });
    return data?.data
}
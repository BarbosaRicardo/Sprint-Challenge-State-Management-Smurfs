import axios from 'axios'
export const POST_SMURF = "POST_SMURF";

export function postSmurf (formData) {
    return dispatch => {
        dispatch({type: POST_SMURF, payload: formData})
        axios
            .post('http://localhost:3333/smurfs', formData)
            .then((res) => {
                console.log(res);
                
            })
    }
}

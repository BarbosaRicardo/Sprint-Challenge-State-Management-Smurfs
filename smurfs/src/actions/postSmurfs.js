import axios from 'axios'
export const POST_SMURFS = 'POST_SMURFS';

export function postSmurf(formData) {
   return dispatch => {
      dispatch ( {type: POST_SMURF, payload: formData} )
      axios
         .post('http://localhost:333/smurfs', formData)
         .then((res) => {
            console.log(res)
         })
   }
}
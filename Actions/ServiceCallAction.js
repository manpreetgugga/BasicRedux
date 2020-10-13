import * as ActionTypes from './ActionTypes';
import { connect } from 'react-redux';


export default callWebservice = () => {
    return dispatch => {
        dispatch(serviceActionPending())
        axios.get('https://www.reddit.com/r/reactjs.json')
        .then(response => {
            dispatch(serviceActionSuccess(response.data.data.children))
        })
        .catch(error => {
            dispatch(serviceActionError(error))
        });
    }
}


const FETCH_MESSAGE = 'hello_rails_react/messages/FETCH_MESSAGE';
const BASE_URL = 'http://localhost:3000/messages';
import axios from 'axios'

const initialState = [];

export const fetchMessageSuccess = (payload) => ({
  type: FETCH_MESSAGE,
  payload,
});


export const fetchMessage = () => async (dispatch) => {
  await axios.get(BASE_URL)
    .then((response) => {
      dispatch(fetchMessageSuccess(response.data));
    });
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};

export default messagesReducer;
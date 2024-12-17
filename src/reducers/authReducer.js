import { types } from "../types/types";

/* 
  {
    uid: 'fasdfsafw4t345',
    name: 'Albert',
    avatar:  'https://fsdafads/sf.cds'
  }
*/

const initialState = {
  uid: null,
  name: null,
  photoURL: null,
  email: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        uid: action.payload.uid,
        name: action.payload.displayName,
        photoURL: action.payload.photoURL,
        email: action.payload.email,
      };

    case types.logout:
      return initialState;

    default:
      return state;
  }
};

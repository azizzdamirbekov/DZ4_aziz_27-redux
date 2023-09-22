import {types} from "./types"

export function showUsersAction(users) {
    return {
        type: types.SHOW_USER,
        payload: users
    }
}

export const getUsersAction = () => {
  return async function (dispatch) {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      dispatch(showUsersAction(data))
  };
};

export function addUserAction(user) {
    return async function (dispatch) {

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }
        const response = await fetch('https://jsonplaceholder.typicode.com/', options)
    }
}
import { AUTH } from "../constants/actionTypes.js";
import * as api from "../api";
export const signin = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signin(formData);
    dispatch({ type: AUTH, data });
    window.location = "/";
  } catch (error) {
    console.log(error);
  }
};
export const signup = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData);
    dispatch({ type: AUTH, data });
    window.location = "/";
  } catch (error) {
    console.log(error);
  }
};

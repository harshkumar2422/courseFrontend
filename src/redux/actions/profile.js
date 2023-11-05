import { server } from '../stores';
import axios from 'axios';

export const updateProfile = (name, email) => async dispatch => {
  try {
    dispatch({ type: 'updateProfileRequest' });
    const { data } = await axios.put(
      `${server}/updateProfile`,
      { name, email },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    dispatch({ type: 'updateProfileSuccess',payload:data.message });
  } catch (error) {
    dispatch({
      type: 'updateProfileFail',
      payload: error.response.data.message,
    });
  }
};
export const updateProfilePicture = (fromdata) => async dispatch => {
  try {
    dispatch({ type: 'updateProfilePictureRequest' });
    const { data } = await axios.put(
      `${server}/updateProfilepicture`,
     fromdata,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );
    dispatch({ type: 'updateProfilePictureSuccess',payload:data.message });
  } catch (error) {
    dispatch({
      type: 'updateProfilePictureFail',
      payload: error.response.data.message,
    });
  }
};

export const changePassword = (oldPassword,newPassword) => async dispatch => {
  try {
    dispatch({ type: ' changePasswordRequest' });
    const { data } = await axios.put(
      `${server}/changepassword`,
      { oldPassword,newPassword },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    console.log(data);
    dispatch({ type: ' changePasswordSuccess',payload:data.message });
  } catch (error) {
    console.log( error.response.data.message);
    dispatch({
      type: ' changePasswordFail',
      payload: error.response.data.message,
    });
  }
};

export const forgetPassword = (email) => async dispatch => {
  try {
    dispatch({ type: ' forgetPasswordRequest' });
    const { data } = await axios.post(
      `${server}/forgetpassword`,
      { email },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    console.log(data);
    dispatch({ type: ' forgetPasswordSuccess',payload:data.message });
  } catch (error) {
    console.log( error.response.data.message);
    dispatch({
      type: ' forgetPasswordFail',
      payload: error.response.data.message,
    });
  }
};

export const resetPassword = (token,password) => async dispatch => {
  try {
    dispatch({ type: ' resetPasswordRequest' });
    const { data } = await axios.put(
      `${server}/resetToken/${token}`,
      { password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    console.log(data);
    dispatch({ type: ' resetPasswordSuccess',payload:data.message });
  } catch (error) {
    console.log( error.response.data.message);
    dispatch({
      type: ' resetPasswordFail',
      payload: error.response.data.message,
    });
  }
};

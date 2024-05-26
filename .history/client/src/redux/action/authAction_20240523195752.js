import { registerStart, registerSuccess, registerFailure } from './path/to/your/slice';
import { apiRegister } from '../../service/auth';

export const registerUser = (userData) => async (dispatch) => {
  dispatch(registerStart());
  try {
    const response = await apiRegister(userData);
    dispatch(registerSuccess(response.token)); // giả sử token nằm trong response.token
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};
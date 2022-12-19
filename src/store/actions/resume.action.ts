import request from '../../utils/request';
import { RESUME } from '../constants/resume.constant';

export const fetchResume = () => async (dispatch: any) => {
  dispatch({
    type: RESUME.REQUEST,
    payload: {
      loading: true,
    },
  });

  const apiRequest = {
    method: 'GET',
    url: `/api/getResume/`,
  };
  const res = await request(apiRequest);

  if (res.error) {
    dispatch({
      type: RESUME.FAIL,
      payload: {
        loading: false,
        error: res.error,
      },
    });
  } else {
    dispatch({
      type: RESUME.SUCCESS,
      payload: {
        loading: false,
        error: null,
        data: res.data,
      },
    });
  }
};

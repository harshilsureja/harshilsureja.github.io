import request from '../../utils/request';
import { RESUME } from '../constants/resume.constant';
import resumeData from '../../data/harshil-sureja-resume-data';
import { IData } from '../../types';

export const fetchResume =
  () =>
  async (dispatch: any): Promise<void> => {
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
    // const res = await request(apiRequest);
    const { data }: IData = resumeData;

    // if (res.error) {
    //   dispatch({
    //     type: RESUME.FAIL,
    //     payload: {
    //       loading: false,
    //       error: res.error,
    //     },
    //   });
    // } else {
    dispatch({
      type: RESUME.SUCCESS,
      payload: {
        loading: false,
        error: null,
        data,
      },
    });
    // }
  };

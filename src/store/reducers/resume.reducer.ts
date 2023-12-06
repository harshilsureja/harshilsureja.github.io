import { RESUME } from '../constants/resume.constant';

export const resumeReducer = (
  state = {
    loading: false,
    error: null,
    data: null,
  },
  action: any
) => {
  switch (action.type) {
    case RESUME.REQUEST:
      return { ...state, loading: action.payload.loading };
    case RESUME.SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case RESUME.FAIL:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};

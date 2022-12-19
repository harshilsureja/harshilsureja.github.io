import { RESUME } from '../constants/resume.constant';

export const resumeReducer = (
  state = {
    loading: false,
    error: null,
    data: {},
  },
  action: any
) => {
  switch (action.type) {
    case RESUME.REQUEST:
      return { ...state, loading: action.payload.loading };
    case RESUME.SUCCESS:
      return { ...state, loading: false, resumeData: action.payload.data };
    case RESUME.FAIL:
      return { ...state, loading: false, error: action.payload.error };
    default:
      break;
  }
};

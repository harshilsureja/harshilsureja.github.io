import { createSlice } from '@reduxjs/toolkit';
import { THEME_NAME } from '../../../enum';
import { THEME_MODE } from '../../../enum/theme';

const initialState = {
  theme_name: THEME_NAME.rainbow,
  color_scheme: THEME_MODE.light,
};

const themeReducer = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    updateTheme(state, action) {
      state.theme_name = action.payload;
    },
    updateColorSchema(state, action) {
      state.color_scheme = action.payload;
    },
  },
});

export const { updateTheme, updateColorSchema } = themeReducer.actions;
export default themeReducer.reducer;

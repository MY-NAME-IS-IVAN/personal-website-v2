import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Section = 'all' | 'about' | 'projects' | 'media' | 'skills';

interface SectionState {
  currentSection: Section;
}

const initialState: SectionState = {
  currentSection: 'all',
};

const sectionSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {
    setSection: (state, action: PayloadAction<Section>) => {
      state.currentSection = action.payload;
    },
  },
});

export const { setSection } = sectionSlice.actions;
export default sectionSlice.reducer; 
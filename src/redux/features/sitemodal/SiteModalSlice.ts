import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sitemodal: false,
};

export const SiteModalSlice = createSlice({
  initialState,
  name: "sitemodal-toggle",
  reducers: {
    SiteModalToggle: (state) => {
      state.sitemodal = !state.sitemodal;
    },
  },
});
export const { SiteModalToggle } = SiteModalSlice.actions;
export default SiteModalSlice.reducer;

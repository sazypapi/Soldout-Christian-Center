import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalState: true,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal: (state) => {
      state.modalState = false;
    },
  },
});
export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;

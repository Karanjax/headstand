import { instructorData } from "@/Data/Application/InstructorList/InstructorList";
import { InstructorType } from "@/Type/Application/InstructorList/InstructorList";
import { createSlice } from "@reduxjs/toolkit";

const initialState: InstructorType = {
  activeTab: "1",
  createdFormData: instructorData,
};

const InstructorSlice = createSlice({
  name: "SideBarSlice",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setCreatedData: (state, action) => {
      state.createdFormData = action.payload;
    },
  },
});
export const { setActiveTab, setCreatedData } = InstructorSlice.actions;

export default InstructorSlice.reducer;

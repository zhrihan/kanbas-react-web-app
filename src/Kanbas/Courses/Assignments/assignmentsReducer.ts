import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const today = new Date();
const nextWeek = new Date(today);
nextWeek.setDate(today.getDate() + 7);
const twoWeeksFromNow = new Date(today);
twoWeeksFromNow.setDate(today.getDate() + 14);


const formatDate = (date: Date) => date.toISOString().split('T')[0];

export const initialState = {
  assignments: assignments,
  assignment: {
    title: "New Assignment",
    description: "New Description",
    points: "100",
    dueDate: formatDate(nextWeek),
    availableFromDate: formatDate(today),
    availableUntilDate: formatDate(twoWeeksFromNow)
  },
};

const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        ...state.assignments,
        {
          ...action.payload,
          _id: new Date().getTime().toString()
        }
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        assignment => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map(assignment => {
        if (assignment._id === action.payload._id) {
          return action.payload;
        }
        else {
          return assignment;
        }
      });
    },
    setAssignment: (state, action) => {
      state.assignment = action.payload;
    }
  }
});

export const { addAssignment, deleteAssignment, updateAssignment, setAssignment } = assignmentSlice.actions;
export default assignmentSlice.reducer;
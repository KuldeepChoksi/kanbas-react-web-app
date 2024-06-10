import { createSlice } from "@reduxjs/toolkit";

// Assuming initial assignments state is fetched or empty
const initialState = {
  assignments: [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      // Sets the full list of assignments
      state.assignments = action.payload;
    },
    addAssignment: (state: { assignments: any[] }, { payload: assignment }) => {
        // Adds a new assignment while ensuring it has a unique ID
        const newAssignment = {
            ...assignment,
            _id: new Date().getTime().toString(), // Generate a unique ID for the new assignment
        };
        state.assignments = [...state.assignments, newAssignment];
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
        // Removes an assignment by ID
        state.assignments = state.assignments.filter((assignment: { _id: string }) => assignment._id !== assignmentId);
    },
    updateAssignment: (state: { assignments: any[] }, { payload: assignment }: { payload: any }) => {
        // Updates an existing assignment
        state.assignments = state.assignments.map(a =>
            a._id === assignment._id ? { ...a, ...assignment } : a
        );
    },
    editAssignment: (state: { assignments: any[] }, { payload: assignmentId }) => {
        // Marks an assignment as being edited
        state.assignments = state.assignments.map(a =>
            a._id === assignmentId ? { ...a, editing: true } : a
        );
    },
  },
});

export const { setAssignments, addAssignment, deleteAssignment, updateAssignment, editAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;

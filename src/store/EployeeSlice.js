import { createSlice } from "@reduxjs/toolkit";
import employeeObj from "../obj"

const initialState = employeeObj;

const employeeSlice = createSlice({
  name : "employee",
  initialState,
  reducers : {
    cancelEmployee : (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
    addEmployee : (state, action) => {
      return [action.payload.obj, ...state];
    },
    editEmployee : (state, action) => {
      state.filter(item => {
        if(item.id === action.payload.obj.id){
          item.name = action.payload.obj.name
          item.email = action.payload.obj.email
          item.number = action.payload.obj.number
          item.department = action.payload.obj.department
        }
      })
    }
  }
});

export const {cancelEmployee, addEmployee, editEmployee} = employeeSlice.actions;

export default employeeSlice.reducer;
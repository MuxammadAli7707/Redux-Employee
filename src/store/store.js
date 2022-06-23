import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "./EployeeSlice"

export default configureStore({
  reducer : {
    employee : employeeSlice,
  }
})
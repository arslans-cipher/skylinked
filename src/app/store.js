import { configureStore } from "@reduxjs/toolkit"
import userReducer from '../features/Counterslice'

export default configureStore({
  reducer: {
    counter: userReducer
  }
})


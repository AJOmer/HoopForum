import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import questionsReducer from '../features/questionsSlice';


export default configureStore({
    reducer: {
        user: userReducer,
        question: questionsReducer,
    }
});
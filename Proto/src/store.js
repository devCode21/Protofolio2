import {configureStore} from '@reduxjs/toolkit';
import ValueReducer from './value';

export const store = configureStore({
    reducer: ValueReducer
})
import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from '../features/activeLinks/activeLinkSlice';
import elementsReducer from '../features/elementsPage/elementsPageSlice';

export const store = configureStore({
    reducer: {
        navigation: navigationReducer,
        elementPages: elementsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
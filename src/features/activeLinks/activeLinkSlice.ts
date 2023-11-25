import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ActivePageState {
    activePage: string;
}

const initialState: ActivePageState = {
    activePage: 'payroll-management',
};

const activePageSlice = createSlice({
    name: 'activePage',
    initialState,
    reducers: {
        setActivePage: (state, action: PayloadAction<string>) => {
            state.activePage = action.payload;
        },
    },
});

export const { setActivePage } = activePageSlice.actions;
export default activePageSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    options: [],
    isOpenOptions: false,
    style: {},
    optionsRef: null,
};

export const optionsRootSlice = createSlice({
    name: 'optionsRoot',
    initialState,
    reducers: {
        openDialog: (state, action) => {
            const dialog = action.payload;
            state.dialog = dialog;
        },
        closeDialog: (state) => {
            state.dialog = null
        },
    },
});

export const { openDialog, closeDialog } = optionsRootSlice.actions;

export default optionsRootSlice.reducer;
import {createAsyncThunk, createSlice, isAsyncThunkAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {fetchList} from './mainAPI';
import {IServerListData} from "../../app/interfaces/interfaces";

export interface IState {
    showLoading: boolean;
    list: IServerListData;
}

const initialState: IState = {
    showLoading: false,
    list: {}
};

export const incrementAsync = createAsyncThunk(
    'main/fetchCount',
    async () => {
        const response = await fetchList();
        return response.json();
    }
);

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(incrementAsync.fulfilled, (state, action) => {
            state.list = action.payload
        });
        builder.addMatcher(
            isAsyncThunkAction,
            (state, action) => {
                state.showLoading = !action.type.endsWith('/fulfilled');
            })
    },
});

export const selectCount = (state: RootState) => state.main.list;

export default mainSlice.reducer;

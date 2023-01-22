import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/main/mainSlice';

export const store = configureStore({
  reducer: {
    main: counterReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

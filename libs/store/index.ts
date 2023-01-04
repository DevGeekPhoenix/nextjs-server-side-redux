import {
  Action,
  AnyAction,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { RTKQuerySSRApi } from "../../domains/RTKQuery-SSR/RTKQuery-SSR.sevices";
import NextReduxWrapperSlice from "../../domains/NextReduxWrapper/NextReduxWrapper.store";

const combinedReducer = combineReducers({
  [RTKQuerySSRApi.reducerPath]: RTKQuerySSRApi.reducer,
  NextReduxWrapperSlice: NextReduxWrapperSlice,
});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const masterReducer = (state: any, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      NextReduxWrapperSlice: {
        postData: action.payload.NextReduxWrapperSlice.postData,
      },
      [RTKQuerySSRApi.reducerPath]: action.payload["RTKQuerySSR"],
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const makeStore = () =>
  configureStore({
    reducer: masterReducer,

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(RTKQuerySSRApi.middleware),
  });

export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: true,
  serializeState: (state) => JSON.stringify(state),
  deserializeState: (state) => JSON.parse(state),
});

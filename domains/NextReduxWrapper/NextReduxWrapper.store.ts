import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { PostTypeResponse } from "./index.d";
import { RootState } from "../../libs/store";

type InitialStateType = {
  postData: PostTypeResponse[];
};

const initialState: InitialStateType = {
  postData: [],
};

const NextReduxWrapperSlice = createSlice({
  name: "NextReduxWrapperSlice",
  initialState,

  reducers: {
    setPostData: (state, action: PayloadAction<any>) => {
      state.postData = action.payload;
    },
  },
});

export const { setPostData } = NextReduxWrapperSlice.actions;

export default NextReduxWrapperSlice.reducer;

export const usePostDataSelector = () => {
  const postData = useSelector(
    (state: RootState) => state.NextReduxWrapperSlice.postData
  );
  return postData;
};

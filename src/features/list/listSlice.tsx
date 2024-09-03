import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { getRandomColor } from "../../helpers/getRandomColor";

interface IBlock {
  id: number;
  color: string;
}

interface IListState {
  list: IBlock[];
}

const initialState: IListState = {
  list: [],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addFirstBlock: (state) => {
      state.list.unshift({ id: Math.random(), color: getRandomColor() });
    },
    removeLastBlock: (state) => {
      state.list.pop();
    },
  },
});

export const { addFirstBlock, removeLastBlock } = listSlice.actions;

export const selectList = (state: RootState) => state.list;

export default listSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: 'homePanelVisib',
    initialState: {
        salesVisibility: false,
        wharehouseVisibility: false,
    },
    reducers: {
        setSalesVisibility: (state, action)=> {
            state.salesVisibility = action.payload;
        },
        setWhareHouseVisibility: (state, action)=> {
            state.wharehouseVisibility = action.payload;
        },
    }
})



export const { setSalesVisibility, setWhareHouseVisibility } = slice.actions;

export default slice.reducer;
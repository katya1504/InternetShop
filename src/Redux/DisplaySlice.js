import { createSlice } from '@reduxjs/toolkit'

export const DisplaySlice = createSlice({
    name: 'Display',
    initialState: { 
    selectedCategory: 'Armchair',  
},

reducers: {
    filterCategory: (state, action) => {
        state.selectedCategory = action.payload;
        }
            }
        })
        
        export const getSelectedCategory = state => state.Display.selectedCategory;
        export const { filterCategory } = DisplaySlice.actions   
export default DisplaySlice.reducer;
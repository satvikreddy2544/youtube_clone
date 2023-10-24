import { createSlice } from "@reduxjs/toolkit";

const sideBarslice =createSlice ({

    name:'sidebar',
    initialState:{
        isMenuOpen:true,

    },
    reducers:{

        toggleSideBar : (state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        },
        closeMenu : (state) =>{
            state.isMenuOpen=false;
        },
        openMenu : (state) =>{
            state.isMenuOpen = true;
        }
    }
});

export const {toggleSideBar,closeMenu,openMenu} =sideBarslice.actions;
export default sideBarslice.reducer;

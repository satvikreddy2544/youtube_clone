import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import sideBarSlice from '../utilties/sideBarSlice';
import cacheSlice from '../utilties/cacheSlice';
import chatSlice from '../utilties/chatSlice';

const Store=configureStore({

    reducer:{
        sidebar:sideBarSlice,
        search : cacheSlice,
        chat:chatSlice
    }
}

);

export default Store;

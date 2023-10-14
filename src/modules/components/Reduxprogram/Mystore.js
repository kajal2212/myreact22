import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './Myactions';

export default configureStore({
    reducer: {
        counter:counterSlice,
    }
  })
 





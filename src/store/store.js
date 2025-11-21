import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './slices/chatSlice';
import jobsReducer from './slices/jobsSlice';
import freelancerSlice from './slices/freelancerSlice';
import clientsSlice from './slices/clientsSlice';
import offerSlice from './slices/offerSlice';

const store = configureStore({
  reducer: {
    chat: chatReducer,
    jobs: jobsReducer,
    freelancer:freelancerSlice,
    client:clientsSlice,
    offers:offerSlice,
  },
});

export default store;

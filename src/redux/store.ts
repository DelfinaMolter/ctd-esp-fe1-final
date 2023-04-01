import { configureStore} from "@reduxjs/toolkit";
import personajesReducer from './personajesSlice'

const store = configureStore({
    reducer: {
        personaje: personajesReducer
    },
});

// Tipamos el hook useSelector y useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
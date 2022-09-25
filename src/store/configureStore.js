import { configureStore} from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middlewares/logger"

export default function (){
return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

};
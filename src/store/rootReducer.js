import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import resourcesReducer from "./resources/reducer";
import developersReducer from "./developers/reducer";

const reducer = combineReducers({
  user: userReducer,
  resources: resourcesReducer,
  developers: developersReducer,
});

export default reducer;

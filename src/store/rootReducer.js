import { combineReducers } from "redux";
import usersReducer from "./users/reducer";
import resourcesReducer from "./resources/reducer";
import developersReducer from "./developers/reducer";

const reducer = combineReducers({
  users: usersReducer,
  resources: resourcesReducer,
  developers: developersReducer,
});

export default reducer;

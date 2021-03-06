import { createStore } from "redux";
import rootReducer from "./services/reducers/index";

const store = createStore(rootReducer);
export default store
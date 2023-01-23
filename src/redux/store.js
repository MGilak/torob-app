import showMobileReducer from "./singleMobile/mobileReducer";
import { createStore } from "redux";

const store = createStore(showMobileReducer);

export default store;

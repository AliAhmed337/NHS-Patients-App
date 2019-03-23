import { combineReducers } from "redux";
import AppointmentsReducer from './AppointmentsReducer';
import AuthReducer from "./AuthReducer";

export default combineReducers({
    appointmentsRed: AppointmentsReducer,
    authRed: AuthReducer
});
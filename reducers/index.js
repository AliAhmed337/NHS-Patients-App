import { combineReducers } from "redux";
import AppointmentsReducer from './AppointmentsReducer';

export default combineReducers({
    appointmentsRed: AppointmentsReducer
});
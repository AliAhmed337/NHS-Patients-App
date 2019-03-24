import { combineReducers } from "redux";
import AppointmentsReducer from './AppointmentsReducer';
import AuthReducer from './AuthReducer';
import PreparationsReducer from './PreparationsReducer'; 

export default combineReducers({
    appointmentsRed: AppointmentsReducer,
    authRed: AuthReducer,
    prepRed: PreparationsReducer
});
import { combineReducers } from "redux";
import AppointmentsReducer from './AppointmentsReducer';
import QRAuthReducer from './QRAuthReducer';
import ManualAuthReducer from './ManualAuthReducer';

export default combineReducers({
    appointmentsRed: AppointmentsReducer,
    qrRed: QRAuthReducer,
    manRed: ManualAuthReducer
});
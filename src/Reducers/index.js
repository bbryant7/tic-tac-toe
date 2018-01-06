import { combineReducers } from "redux";
import myTurnReducer from "./computersTurnReducer";
import squaresReducer from "./squaresReducer";

const rootReducer = combineReducers({
  turn: myTurnReducer,
  squares: squaresReducer
});

export default rootReducer;

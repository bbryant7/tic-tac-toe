import { combineReducers } from "redux";
import myTurnReducer from "./computersTurnReducer";
import squaresReducer from "./squaresReducer";
import resetGameReducer from "./resetGame";

const rootReducer = combineReducers({
  turn: myTurnReducer,
  squares: squaresReducer,
  resetGame: resetGameReducer
});

export default rootReducer;

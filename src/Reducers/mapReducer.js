// mapReducer.js
import { ActionTypes } from "../Actions/mapActions";

const initialState = {
  selectedRegion: null,
  nightMode: false,
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_REGION:
      return {
        ...state,
        selectedRegion: action.payload,
      };
    case ActionTypes.TOGGLE_NIGHT_MODE:
      return {
        ...state,
        nightMode: !state.nightMode,
      };
    default:
      return state;
  }
};

export default mapReducer;

// mapActions.js
export const ActionTypes = {
  LOAD_REGION: "LOAD_REGION",
  TOGGLE_NIGHT_MODE: "TOGGLE_NIGHT_MODE",
};

export const loadRegion = (region) => ({
  type: ActionTypes.LOAD_REGION,
  payload: region,
});

export const toggleNightMode = () => ({
  type: ActionTypes.TOGGLE_NIGHT_MODE,
});

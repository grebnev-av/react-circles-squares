export const initialState = {
  form: {
    circle: true,
    square: true,
  },
  color: {
    red: true,
    blue: true,
    green: true,
    yellow: true,
  },
  brightness: {
    all: true,
    dark: false,
    light: false,
  },
};

function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case "APPLY_FORM_FILTER":
      return { ...state, form: { ...state.form, ...action.value } };
    case "APPLY_COLOR_FILTER":
      return { ...state, color: { ...state.color, ...action.value } };
    case "APPLY_BRIGHTNESS_FILTER":
      return { ...state, brightness: { ...state.brightness, ...action.value }};
    default:
      return state;
  }
}

export default filtersReducer;

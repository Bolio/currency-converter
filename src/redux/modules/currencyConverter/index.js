const initialState = {
  currencyConverter: {},
  fetching: false,
  success: false,
  error: false,
  errorMessage: "",
};

// Actions
const FETCH_INFORMATION_CURRENCY =
  "modules/currencyConverter/FETCH_INFORMATION_CURRENCY";

// Reducers
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_INFORMATION_CURRENCY:
      return { ...state, currencyConverter: action.payload };
    default:
      return state;
  }
}

// Action Creators
export const fetchCurrenciesInformation = (payload) => {
  return {
    type: FETCH_INFORMATION_CURRENCY,
    payload,
  };
};

// Epics
export const fetchInformationCurrenciesThunk = () => async (dispatch) => {
  try {
    console.log("FROM API");
    const urlAPI = ``;
    const responseAPI = await fetch(urlAPI);
    const resultAPI = await responseAPI.json();
    dispatch(fetchCurrenciesInformation(resultAPI));
  } catch (error) {
    console.log(error);
  }
};

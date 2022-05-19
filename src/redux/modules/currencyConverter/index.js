const initialState = {
  currentConversion: {},
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
      return { ...state, currentConversion: action.payload };
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
export const fetchInformationCurrenciesThunk = (choice) => async (dispatch) => {
  console.log("choice", choice);
  const myHeaders = new Headers();
  myHeaders.append("apikey", "nUban3UMWWnLBpyYuXzc6AmOGVnTULuI");
  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };
  const convertTO = choice === "USD" ? "MXN" : "USD";
  try {
    console.log("FROM API");
    const urlAPI = `https://api.apilayer.com/exchangerates_data/convert?to=${convertTO}&from=${choice}&amount=1`;
    const responseAPI = await fetch(urlAPI, requestOptions);
    const resultAPI = await responseAPI.json();
    dispatch(fetchCurrenciesInformation(resultAPI));
  } catch (error) {
    console.log(error);
  }
};

export const geoReducer = (state, action) => {
  switch (action.type) {
    case 'SEND_REQUEST':
      return {...state, loading: true};
    case'LOAD_COUNTRIES':
      return {...state, countryList: action.payload};  
    
    case'LOAD_STATES':
      return {...state, stateList: action.payload};  
    
    case'LOAD_CITIES':
        return {...state, cityList: action.payload};
      
      case 'SEND_NO_LIST_MSG':
          return {...state, emptyListMsg: action.payload};
     
     case 'SET_COUNTRY_FILTER':
         return {...state,  ...{countryFilter : action.payload, loading: true, cityFilter: '', currentCountryId: null, currentStateId: null, stateFilter: '', stateList:[], cityList: []}};
     case 'SET_STATE_FILTER':
         return {...state, ...{stateFilter : action.payload, cityList: [], cityFilter: ''}}; 
     
     case 'SET_CITY_FILTER':
         return {...state, cityFilter : action.payload};   
         
    case 'FILTER_COUNTRIES':
      return { ...state,  ...{loading: false, countryList: action.payload}};
    
    case 'FILTER_STATES':
      return { ...state,   stateList: action.payload};
    
    case 'FILTER_CITIES':
      return { ...state,  cityList: action.payload};
      
     case 'SET_CURRENT_COUNTRY':
         return {...state, ...{currentCountryId: action.payload, countryFilter: '', cityFilter:'', stateFilter: '', currentStateId: null}};
     case 'SET_CURRENT_STATE':
         return {...state, ...{currentStateId: action.payload, cityFilter:'', stateFilter: ''}};
         
    
    case 'HANDLE_REQUEST_SUCCCESS':
      return{...state, loading: false};
    
    default:
      return state;
  }
};

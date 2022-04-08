const initialState = {
  typeList: 'GRID',
  typeSearch: '',
};
const UsuarioReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_TYPELIST':
      return { ...state, typeList: action.payload.typeList };
    case 'SET_TYPESEARCH':
      return { ...state, typeSearch: action.payload.typeSearch };
    default:
      return state;
  }
};



export default UsuarioReducer;


const reducer = (state, action) => {
     switch(action.type) {
         case "REDUCE":
             return {
                 ...state,
                 totalAmount: state.totalAmount - action.amount
             }

         default:
             return state
             
     }
}

export default reducer
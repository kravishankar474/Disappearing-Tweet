const initialState = {
    data: "",
    date: "",
    time: "",
    tasks: []
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'CHANGE_TEXT':
            return {
                ...state,
                data : action.payload
            }
        case 'CHANGE_DATE':
                return {
                    ...state,
                    date : action.payload
                }
        case 'CHANGE_TIME':
                return {
                    ...state,
                    time : action.payload
                }
        case 'ADD_TASK':
            return {
                ...state,
                tasks : [...state.tasks, {'text':state.data,'date':state.date, 'time':state.time}],
                data : ""
            }
        default:
            return state;
    }
}

export default reducer;
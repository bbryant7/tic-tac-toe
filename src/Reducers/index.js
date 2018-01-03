
export default function (state = true, action) {
    switch(action.type) {
        case 'MYTURN':
            return state = !state;
    }
    return state;
}


export function increment (){
    console.log("in action increment");

    return {
        type : 'INCREMENT',
        payload : ''
    }
}

export function decrement(){
    return {
        type : 'DECREMENT'
    }
}

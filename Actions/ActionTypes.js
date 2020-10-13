export const INCREMENET_COUNT = "INCREMENET_COUNT"
export const DECREMENET_COUNT = "DECREMENET_COUNT"

export const incrementCountAction = () => ({
    type: INCREMENET_COUNT,
    payload : "increment"
})

export const decrementCountAction = () => ({
    type: DECREMENET_COUNT,
    payload : "decrement"
})

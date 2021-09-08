
//yeh isliya banaya ha agr spelling mistake hoti ha to kaam nhe krtga to ab agar agr increment ki spelling 
//change bhi hogae to tab kaam karega kyun ka pehla INCREMENT ki value increment me jaega or samll increment 
//type me jaraha ha

export const increment = "INCREMENT";
export const decrement = "DECREMENT";
export const reset = "RESET"

export const incrementAction = () => ({
    type: increment,
});
export const decrementAction = () => ({
    type: decrement,
});
export const resetAction = () => ({
    type: reset,
});

const action = (amt) => {
    return {
        type: "REDUCE",
        amount : amt
     }
}

export default action
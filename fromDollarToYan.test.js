// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const {fromDollarToYan} = require("./fromDollarToYan")

test('Si cambio 1.2$ debo recibir 127.9 yuanes', ()=>{
    let result = fromDollarToYan(1.2)
    expect(result).toBe(127.9)
})
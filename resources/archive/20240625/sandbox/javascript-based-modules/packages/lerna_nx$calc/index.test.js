const {arrsum} = require("calc");

test("module function check", ()=>{
    const source = [1, 2, 3, 4, 5, 6, 7]

    const result = arrsum({
        data: source,
        op: "+",
    });
    
    expect(result).toBe(28);

    expect(()=>{
        throw new Error("ooo")
    }).toThrow("oo")
})
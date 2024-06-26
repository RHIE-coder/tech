import {isValid} from 'jsoncheck';

test("1 is 1", () => {
  expect(1).toBe(1);
});

test("isValid()", ()=>{
    const valid_data = {
        data: [1, 2, 3, 4, 5],
        op:"+",
    }

    const invalid_data = {
        data: ["1", 2, 3],
        op:"*"
    }

    const schema = {
        type: "object",
        properties: {
            data: {
                type: "array",
                items: {
                    type: "integer",
                },
            },
            op:{
                type: "string",
                enum: ["+","-","*","/","%"],
            }
        },
        required:["data","op"],
        additionalProperties: false,
    }

    const expect_valid = isValid(valid_data, schema);
    expect(expect_valid).toBe(true);

    const expect_invalid = isValid(invalid_data, schema);
    expect(expect_invalid).toBe(false)
});
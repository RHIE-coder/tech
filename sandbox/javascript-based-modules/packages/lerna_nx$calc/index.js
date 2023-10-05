const _ = require('lodash');
const {isValid} = require('jsoncheck');

module.exports.arrsum = function(obj) {

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
                enum: ["+"],
            }
        },
        required:["data","op"],
        additionalProperties: false,
    }

    if(isValid(obj, schema)) {
        return _.sum(obj.data);
    }

    throw new Error("not valid object");
}
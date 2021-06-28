'use strict';

import {dynamodb} from "../dynamodb";

export const removeVehicle = (id) => {
    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Key: { id }
    };
    return dynamodb.delete(params).promise().then(res => {
        return Object.keys(res).length === 0;
    })
};

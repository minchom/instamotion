'use strict';

import {dynamodb} from "../dynamodb";

export const viewVehicle = (id) => {

    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Key: { id }
    };
    return dynamodb.get(params).promise()
        .then(r => r.Item);
};

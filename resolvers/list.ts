'use strict';

import {dynamodb} from "../dynamodb";

export const listVehicles = () => dynamodb.scan({ TableName: process.env.DYNAMODB_TABLE }).promise()
    .then(r => r.Items);

'use strict';

import { graphql } from 'graphql';
import {schema} from "./schema";

export const queryVehicles = (event, context, callback) => {
    graphql(schema, event.body)
        .then(result => callback(null, {statusCode: 200, body: JSON.stringify(result)}))
        .catch(callback);
};

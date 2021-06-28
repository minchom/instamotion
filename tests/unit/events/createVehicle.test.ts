import * as uuid from "uuid";
import {dynamodb} from "../../../dynamodb";

const { DocumentClient } = require('aws-sdk/clients/dynamodb');

const isTest = process.env.JEST_WORKER_ID;
const config = {
  convertEmptyValues: true,
  ...(isTest && {
    endpoint: 'localhost:8000',
    sslEnabled: false,
    region: 'local-env',
  }),
};

const ddb = new DocumentClient(config);


describe('method', () => {

    it('should insert vehicle into table', async (done) => {
        const id = uuid.v1();
        const vehicle = {
            id,
            make: "Audi",
            model: "A4",
            transmission: "MANUAL_GEARBOX",
            mileage: 10000,
            fuel_type: "PETROL",
            vehicle_type: "SUV",
            vehicle_color: "BLACK",
            created_at: Date.now(),
            updated_at: null
        };
    
        await ddb
        .put({TableName: 'vehicles', Item: vehicle})
        .promise()      
        done();

        const {Item} = await ddb.get({TableName: 'vehicles', Key: {id}}).promise();
      
        expect(Item).toEqual(vehicle);
      });
})
import {
    GraphQLEnumType,
} from 'graphql';
const VehicleEnumType = new GraphQLEnumType({
    name: 'VehicleType',
    values: {
        CABRIOLET: {
            value: 0,
        },
        COUPE: {
            value: 1,
        },
        ESTATE: {
            value: 2,
        },
        SUV: {
            value: 3
        },
        SALOON: {
            value: 4
        },
        VAN: {
            value: 5
        },
        SMALL: {
            value: 6
        },
        OTHER: {
            value: 7
        }
    },
});
export default VehicleEnumType;
import {
    GraphQLEnumType,
} from 'graphql';
const FuelEnumType = new GraphQLEnumType({
    name: 'FuelEnum',
    values: {
        PETROL: {
            value: 0,
        },
        DEISEL: {
            value: 1,
        },
        ELECTRIC: {
            value: 2,
        },
        LPG: {
            value: 3,
        },
        HYBRID: {
            value: 4,
        },
    },
});
export default FuelEnumType;
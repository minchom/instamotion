import {
    GraphQLEnumType,
} from 'graphql';
const TransmissionEnumType = new GraphQLEnumType({
    name: 'TransmissionEnum',
    values: {
        MANUAL_GEARBOX: {
            value: 0,
        },
        SEMI_AUTOMATIC: {
            value: 1,
        },
        AUTOMATIC_TRANSMISSION: {
            value: 2,
        },
    },
});
export default TransmissionEnumType
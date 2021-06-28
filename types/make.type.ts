import {
    GraphQLEnumType,
} from 'graphql';
const MakeEnumType = new GraphQLEnumType({
    name: 'MakeEnum',
    values: {
        AUDI: {
            value: 0,
        },
        BMW: {
            value: 1,
        },
        MERCEDES: {
            value: 2,
        },
        VW: {
            value: 3
        },
        SKODA: {
            value: 4
        }
    },
});
export default MakeEnumType
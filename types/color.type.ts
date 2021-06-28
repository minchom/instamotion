import {
    GraphQLEnumType,
} from 'graphql';
const ColorTypeEnum = new GraphQLEnumType({
    name: 'ColorEnum',
    values: {
        BLACK: {
            value: 0,
        },
        WHITE: {
            value: 1,
        },
        RED: {
            value: 2,
        },
        YELLOW: {
            value: 3
        },
        SILVER: {
            value: 4
        }
    },
});
export default ColorTypeEnum
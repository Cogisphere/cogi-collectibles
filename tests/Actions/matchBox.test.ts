import Box from "../../lib/Structures/Box";
import matchBox from "../../lib/Actions/matchBox";

describe('matchBox()', () => {

    const suspect:Partial<Box> = {
        name: "test",
        tags: [ "t1", "T2" ],
        models: [
            {
                possibilities: [
                    {  
                        name: "suspect-model",
                        tags: [ "m1", "M2" ]
                    }
                ]
            }
        ]
    };

    test('it should match a substring in a name', () => {

        const result = matchBox("tes", suspect);

        expect(result).toEqual(true);
    });

    test('it should match a substring in a model name', () => {

        const result = matchBox("sus", suspect);

        expect(result).toEqual(true);
    });

    test('it should not match if the keyword is something different', () => {

        const result = matchBox("notamatchatall", suspect);

        expect(result).toEqual(false);
    });

    test('it should match if keyword matches a box tag', () => {

        const result = matchBox('t1', suspect);

        expect(result).toEqual(true);
    });

    test('it should match if keyword matches a box tag (different cases)', () => {

        const result = matchBox('t1', suspect);

        expect(result).toEqual(true);
    });

    test('it should match if keyword matches a model tag', () => {

        const result = matchBox('m1', suspect);

        expect(result).toEqual(true);
    });

    test('it should match if keyword matches a model tag (different cases)', () => {

        const result = matchBox('m2', suspect);

        expect(result).toEqual(true);
    });
});

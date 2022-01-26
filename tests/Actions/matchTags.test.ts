import matchTags from "../../lib/Actions/matchTags";

describe('matchTags()', () => {

    test('it should match when there is a tag with exact match', () => {

        const result = matchTags("test", [ 'test' ]);

        expect(result).toEqual(true);
    });

    test('it should match when there is a tag with mismatched case', () => {

        const r1 = matchTags("test", [ 'TEST' ]);

        expect(r1).toEqual(true);

        const r2 = matchTags('TEST', [ 'test' ]);

        expect(r2).toEqual(true);
    });
});

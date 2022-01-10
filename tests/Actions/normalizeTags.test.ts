import normalizeTags from "../../lib/Actions/normalizeTags";

describe('normalizeTags()', () => {

    test('it should make sure that all tags there', () => {

        const keywords = normalizeTags([ 'TAG-A', 'TAG-B' ]);

        expect(keywords.includes('TAG-A')).toBeTruthy();
        expect(keywords.includes('TAG-B')).toBeTruthy();
        expect(keywords.includes('TAG-C')).toBeFalsy();
    });

    test('it should make sure that all tags are uppercased', () => {

        const keywords = normalizeTags([ 'tag-A', 'tag-B' ]);

        expect(keywords.includes('TAG-A')).toBeTruthy();
        expect(keywords.includes('TAG-B')).toBeTruthy();
        expect(keywords.includes('TAG-C')).toBeFalsy();
    });

    test('it should make sure all case is preserved when uppercased option is false', () => {

        const keywords = normalizeTags([ 'tag-A', 'TAG-B' ], { uppercased: false });

        expect(keywords.includes('tag-A')).toBeTruthy();
        expect(keywords.includes('TAG-B')).toBeTruthy();
    });

    test('it should make sure that all tags are unique with default case handling', () => {

        const keywords = normalizeTags([ 'tag-A', 'tag-B', 'tag-B' ]);

        expect(keywords.length).toEqual(2);
    });

    test('it should make sure that all tags are unique with laxed uppercased option', () => {

        const keywords = normalizeTags([ 'tag-A', 'tag-B', 'TAG-B' ], { uppercased: false });

        expect(keywords.length).toEqual(3);
    });
});

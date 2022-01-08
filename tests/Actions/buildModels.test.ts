import buildModels from '../../lib/Actions/buildModels';
import Model from '../../lib/Structures/Model';

describe('buildModels', () => {

    test('it should create an array with length of count', () => {

        const models = buildModels(5);

        expect(models).toHaveLength(5);
    });

    test('it should create an array of models', () => {

        const models = buildModels(5);

        for (let model of models) {

            expect(typeof model).toEqual('object');
            expect(model).toHaveProperty('id');
        };
    });

    test('it should create models with different ids', () => {

        const models = buildModels(5);

        const ids = new Set(models.map((m:Model) => m.id));

        expect(ids.size).toEqual(5);
    });
});

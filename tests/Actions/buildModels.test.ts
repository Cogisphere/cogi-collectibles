import buildModels from '../../lib/Actions/buildModels';
import buildBox from '../../lib/Actions/buildBox';
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

    test('it should create models bases on collection of partial data', () => {

        const stubs = [
            { name: 'model-a' },
            { name: 'model-b' },
            { name: 'model-c '}
        ];

        const models = buildModels(stubs);

        expect(models.length).toEqual(stubs.length);

        expect(models.findIndex((value:Model) => value.name === stubs[0].name)).toBeGreaterThan(-1);
        expect(models.findIndex((value:Model) => value.name === stubs[1].name)).toBeGreaterThan(-1);
        expect(models.findIndex((value:Model) => value.name === stubs[2].name)).toBeGreaterThan(-1);
    });

    test('it should create models based on box', () => {

        const box = buildBox({
            models: [
                { possibilities: [ { name: 'test-1' }, { name: 'test-2' } ] }
            ]
        });

        const models = buildModels(box);

        expect(models.length).toEqual(1);

        expect(models.findIndex((value:Model) => value.name === 'test-1')).toBeGreaterThan(-1);
    });
});

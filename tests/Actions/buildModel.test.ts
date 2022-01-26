import buildModel from '../../lib/Actions/buildModel';
import { ModelState } from '../../lib/Structures/Model';

describe('buildModel', () => {

    test('it should build a model with ID', () => {

        const model = buildModel();

        expect(model).toHaveProperty('id');
        expect(model.id.length).toBeGreaterThan(0);
    });

    test('it should initialize the model as unknown state', () => {

        const model = buildModel();

        expect(model).toHaveProperty('state');
        expect(model.state).toEqual(ModelState.Unknown);
    });

    test('it should initialize the model with information from the stub', () => {

        const stub = {
            name: 'test',
            state: ModelState.Done,
            id: 'test-id'
        };

        const model = buildModel(stub);

        expect(model.name).toEqual(stub.name);
        expect(model.id).toEqual(stub.id);
        expect(model.state).toEqual(stub.state);
    });

    test('it should create tagas array', () => {

        const stub = {
            name: 'test',
            state: ModelState.Done
        };

        const model = buildModel(stub);

        expect(model.tags).toBeInstanceOf(Array);
    });

    test('it should fill in the tags array when some passed', () => {

        const stub = {
            name: 'test',
            state: ModelState.Done,
            tags:  [ 't1', 't2' ]
        };

        const model = buildModel(stub);

        expect(model.tags.length).toEqual(2);
        expect(model.tags.includes('t1')).toBeTruthy();
        expect(model.tags.includes('t2')).toBeTruthy();
    });
});
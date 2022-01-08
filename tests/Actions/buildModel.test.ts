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
});
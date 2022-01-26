import Model, { ModelState } from "../Structures/Model";
import { v4 as uuid } from 'uuid';
import normalizeTags from "./normalizeTags";

/**
 *  Create an empty model. This function creates an empty model object
 *  with generated id and unknown status.
 */
function buildModel(stub:Partial<Model>) : Model;
function buildModel(name:string) : Model;
function buildModel() : Model;
function buildModel(input:any = '') : Model {

    const stub =  {
        id: uuid(),
        name: typeof(input) === 'string' ? input : '',
        notes: '',
        state: ModelState.Unknown,
        tags: typeof(input) === 'object' && input.tags ? normalizeTags(input.tags) : []
    };

    if (typeof(input) === 'object') return Object.assign(stub, input);

    return stub;
};

export default buildModel;
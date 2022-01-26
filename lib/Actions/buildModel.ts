import Model, { ModelState } from "../Structures/Model";
import { v4 as uuid } from 'uuid';
import normalizeTags from "./normalizeTags";

/**
 *  Sometimes we have model data, but there is also an additional context
 *  object that should be merged to make the final model data.
 */
export interface ModelContext {

    /**
     *  Additional tags to be assinged to the model.
     */
    tags?:string[];
};

/**
 *  Create an empty model. This function creates an empty model object
 *  with generated id and unknown status.
 */
function buildModel(stub:Partial<Model>, context?:ModelContext|undefined) : Model;
function buildModel(name:string, context?:ModelContext|undefined) : Model;
function buildModel() : Model;
function buildModel(input:any = '', context:ModelContext|undefined = undefined) : Model {

    const stub:Model =  {
        id: uuid(),
        name: typeof(input) === 'string' ? input : '',
        notes: '',
        state: ModelState.Unknown,
        tags: []
    };

    if (typeof(input) === 'object') Object.assign(stub, input);

    if (context) {

        if (context.tags) stub.tags = [ ...context.tags, ...stub.tags ];
    }

    stub.tags = normalizeTags(stub.tags);

    return stub;
};

export default buildModel;
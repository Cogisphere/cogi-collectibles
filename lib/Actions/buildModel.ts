import Model, { ModelState } from "../Structures/Model";
import { v4 as uuid } from 'uuid'; 

/**
 *  Create an empty model. This function creates an empty model object
 *  with generated id and unknown status.
 */
export default function buildModel(name:string = '') : Model {

    return {
        id: uuid(),
        name: name,
        notes: '',
        state: ModelState.Unknown
    };
};
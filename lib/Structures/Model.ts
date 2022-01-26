
/**
 *  Different states that a model can be in.
 */
export enum ModelState {
    Unknown = 'unknown',
    Packaged = 'packaged',
    Assembled = 'assembled',
    Primed = 'primed',
    Painted = 'painted',
    Done = 'done',
    Broken = 'broken'
};

/**
 *  This is an interface describing a model in ones collection.
 */
export default interface Model {

    /**
     *  The unique identifier of the model.
     */
    id:string;

    /**
     *  The name of the model.
     */
    name:string;

    /**
     *  The current model state.
     */
    state:ModelState;

    /**
     *  Notes about the model. This can be MD format.
     */
    notes:string;

    /**
     *  Tags associated with the model.
     */
    tags:string[];
};
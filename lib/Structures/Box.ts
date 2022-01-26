import PossibleModel from "./PossibleModel";

export enum BoxAvailability {
    Unknown = 'unknown',
    Available = 'available',
    OutOfProduction = 'out-of-production'
};

/**
 *  This is an interface describing a box with miniatures. 
 */
export default interface Box {

    /**
     *  The unique id of the box;
     */
    id:string;
    
    /**
     *  The name of the box.
     */
    name:string;

    /**
     *  The availability of the box from the manufacturer.
     */
    availability:BoxAvailability;

    /**
     *  Notes about the box.
     */
    notes:string;

    /**
     *  The models inside the box.
     */
    models:Array<PossibleModel>;

    /**
     *  An array of tags associated with the models inside the box. These are supposed to
     *  be applied to the partial definitions of the models (the list of box tags should
     *  be merged with possibility list of tags).
     */
    tags:Array<string>;
};
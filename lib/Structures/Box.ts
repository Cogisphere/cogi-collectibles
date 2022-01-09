import PossibleModel from "./PossibleModel";

export enum BoxAvailability {
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
};
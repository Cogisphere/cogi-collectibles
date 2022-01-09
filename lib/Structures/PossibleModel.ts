import Model from "./Model";

/**
 *  This is a structure describing one possible model that
 *  can be described with different model data at then end. 
 *  This interface is here mostly cause GW likes to put models
 *  in boxes that can be build as different things. This way
 *  we can easily define such choices with this interface.
 */
export default interface PossibleModel {

    /**
     *  The possibilities of the model.
     */
    possibilities:Array<Partial<Model>>;
};
import Box from "../Structures/Box";
import Model from "../Structures/Model";
import PossibleModel from "../Structures/PossibleModel";
import buildModel, { ModelContext } from "./buildModel";

/**
 *  A function to create a number of models in one go based
 *  on partial model object.
 */
function buildModels(count:number, stub:Partial<Model>, context?:ModelContext) : Array<Model>;

/**
 *  A function to create a number a models in one go
 *  with a given name.
 */
function buildModels(count:number, name:string, context?:ModelContext) : Array<Model>;

/**
 *  Create a number of empty model objects.
 */
function buildModels(count:number) : Array<Model>;

/**
 *  Create models based on a collection of distinct partial objects. 
 */
function buildModels(collection:Iterable<Partial<Model>>, context?:ModelContext) : Array<Model>;

/**
 *  Create models based on a collection of distinct partial objects. 
 */
function buildModels(collection:Partial<Model>[], context?:ModelContext) : Array<Model>;

/**
 *  Create models based on a collection of distinct possible
 *  models definitions. The resolver function is called on each
 *  possible model to determine which possibility should be used.
 */
function buildModels(collection:Iterable<PossibleModel>, resolver: (partials:Array<Partial<Model>>) => Partial<Model>, context?:ModelContext) : Array<Model>;

/**
 *  Create models based on a box definition.
 */
function buildModels(box:Box, resolver: (partials:Array<Partial<Model>>) => Partial<Model>) : Array<Model>;

/**
 *  Create models based on a box definition.
 */
function buildModels(box:Box) : Array<Model>;

// the actual function implementation
function buildModels(first:any, second:any = '', context:ModelContext|undefined = undefined) : Array<Model> {

    // @note we use here some knowledge about how the ModelContext looks like. This is
    // not super great practice, so we need to have tests that will cover for this.
    const deducedContext = (typeof(second) === 'object' && second.tags )? second : context;

    if (typeof (first) === 'object' && 'models' in first) {

        const resolver = typeof(second) === 'function' ? second : (possible:PossibleModel) => { return possible.possibilities[0]; }
     
        return buildModels(first.models, resolver, deducedContext); 
    }

    if (typeof(first[Symbol.iterator]) === 'function') {

        return [...first].map((input:Partial<Model>|PossibleModel) => {

            if ('possibilities' in input) return buildModel(second(input), deducedContext);

            return buildModel(input, deducedContext);
        });
    }

    return new Array(first).fill(undefined).map(() => buildModel(second, deducedContext));
};

export default buildModels;
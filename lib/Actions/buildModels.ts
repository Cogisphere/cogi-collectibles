import Box from "../Structures/Box";
import Model from "../Structures/Model";
import PossibleModel from "../Structures/PossibleModel";
import buildModel from "./buildModel";

/**
 *  A function to create a number of models in one go based
 *  on partial model object.
 */
function buildModels(count:number, stub:Partial<Model>) : Array<Model>;

/**
 *  A function to create a number a models in one go
 *  with a given name.
 */
function buildModels(count:number, name:string) : Array<Model>;

/**
 *  Create a number of empty model objects.
 */
function buildModels(count:number) : Array<Model>;

/**
 *  Create models based on a collection of distinct partial objects. 
 */
function buildModels(collection:Iterable<Partial<Model>>) : Array<Model>;

/**
 *  Create models based on a collection of distinct possible
 *  models definitions. The resolver function is called on each
 *  possible model to determine which possibility should be used.
 */
function buildModels(collection:Iterable<PossibleModel>, resolver: (partials:Array<Partial<Model>>) => Partial<Model>) : Array<Model>;

/**
 *  Create models based on a box definition.
 */
function buildModels(box:Box, resolver: (partials:Array<Partial<Model>>) => Partial<Model>) : Array<Model>;

/**
 *  Create models based on a box definition.
 */
function buildModels(box:Box) : Array<Model>;

// the actual function implementation
function buildModels(first:any, second:any = '') : Array<Model> {

    if (typeof (first) === 'object' && 'models' in first) {

        const resolver = typeof(second) === 'function' ? second : (possible:PossibleModel) => { return possible.possibilities[0]; }
        
        return buildModels(first.models, resolver); 
    }

    if (typeof(first[Symbol.iterator]) === 'function') {

        return [...first].map((input:Partial<Model>|PossibleModel) => {

            if ('possibilities' in input) return buildModel(second(input));

            return buildModel(input);
        });
    }

    return new Array(first).fill(undefined).map(() => buildModel(second));
};

export default buildModels;
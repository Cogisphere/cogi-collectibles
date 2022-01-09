import Model from "../Structures/Model";
import buildModel from "./buildModel";

/**
 *  A function to create a number of models in one go.
 */
function buildModels(count:number, stub:Partial<Model>) : Array<Model>;
function buildModels(count:number, name:string) : Array<Model>;
function buildModels(count:number) : Array<Model>;
function buildModels(collection:Iterable<Partial<Model>>) : Array<Model>;
function buildModels(first:any, second:any = '') : Array<Model> { 

    if (typeof(first[Symbol.iterator]) === 'function') return [...first].map(buildModel);

    return new Array(first).fill(undefined).map(() => buildModel(second));
};

export default buildModels;
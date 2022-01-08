import Model from "../Structures/Model";
import buildModel from "./buildModel";

/**
 *  A function to create a number of models in one go.
 */
export default function buildModels(count:number, name:string = '') : Array<Model> { 

    return new Array(count).fill(undefined).map(() => buildModel(name));
};
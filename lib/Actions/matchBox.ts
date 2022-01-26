import Box from "../Structures/Box";
import matchTags from "./matchTags";

/**
 *  A function to check if a box matches a specific keyword. This function
 *  checks the name of the box, names of the possible models, and tags of
 *  the box and the possible models.
 */
export default function matchBox(keyword:string, box:Partial<Box>) : boolean {

    const normalizedKeyword = keyword.toUpperCase();

    if (box.name && box.name.toUpperCase().includes(normalizedKeyword)) return true;

    if (box.tags && matchTags(keyword, box.tags)) return true;

    if (box.models) {
        for (let models of box.models) {
            for (let model of  models.possibilities) {

                if (model.name?.toUpperCase().includes(normalizedKeyword)) return true;

                if (model.tags && matchTags(keyword, model.tags)) return true;
            }
        }
    }

    return false;
}
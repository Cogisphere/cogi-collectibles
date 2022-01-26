import normalizeTags from "./normalizeTags";
/**
 *  A function to check if a specifici keyword matches a tag list. The keyword
 *  has to match exactly one of the tags.
 */
export default function matchTags(keyword:string, tags:Array<string>) {

    const normalized = normalizeTags(tags);

    return normalized.includes(keyword.toUpperCase());
};
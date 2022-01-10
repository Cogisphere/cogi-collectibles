export interface NormalizeTagsOptions {
    uppercased:boolean;
};

/**
 *  A function to normalize an array of tags into a specific format. This 
 *  function makes sure that the values inside the output are unique by
 *  itself (as they are supposed to be tags).
 */
export default function normalizeTags(input:Array<string>, options:NormalizeTagsOptions = { uppercased: true }) : Array<string> {

    const tags = new Set<string>(input.map((keyword:string) => {

        keyword = keyword.trim();

        if (options.uppercased) keyword = keyword.toUpperCase();

        return keyword;
    }));

    return [...tags];
};
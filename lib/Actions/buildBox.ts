import { v4 as uuid } from 'uuid';
import Box, { BoxAvailability } from '../Structures/Box';

/**
 *  A function that builds a vaild box structure.
 */
export default function buildBox(stub:Partial<Box>) : Box {

    return Object.assign({
        id: uuid(),
        name: '',
        availability: BoxAvailability.Unknown,
        notes: '',
        models: [],
        tags: []
    }, stub);
};
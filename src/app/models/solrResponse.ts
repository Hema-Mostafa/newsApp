import { NewShape } from "./newshape";

export interface SolrResponse {
    responseHeader: {}
    response:{
        numFound: number,
            start:number,
            numFoundExact:number,
            docs: NewShape[]
    }

}
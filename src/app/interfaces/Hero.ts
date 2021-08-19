interface Item {
    resourceURI: string,
    name: string,
    type?: string
}

interface Url {
    type: string,
    url: string
}

interface Collection {
    available: number,
    collectionURI: string,
    items?: Item[],
    returned: number
}

export interface Result {
    id?: number,
    name?: string,
    description?: string,
    modified?: string,
    thumbnail?: {
        path: string,
        extension: string
    },
    resourceURI?: string,
    comics?: Collection,
    series?: Collection,
    stories?: Collection,
    events?: Collection,
    urls?: Url[]
}

export interface HEROOBJ {
    code?: number,
    status?: string,
    copyright?: string,
    attributionText?: string,
    attributionHTML?: string,
    etag?: string,
    data?: {
        offset: number,
        limit: number,
        total: number,
        count: number,
        results: Result[]
    }
}
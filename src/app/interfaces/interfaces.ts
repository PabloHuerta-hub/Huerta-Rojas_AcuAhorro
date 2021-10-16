export interface RootObject {
    meta: Meta;
    data: Datum[];
  }
  
export  interface Datum {
    uuid: string;
    title: string;
    description: string;
    keywords: string;
    snippet: string;
    url: string;
    image_url: string;
    language: string;
    published_at: string;
    source: string;
    categories: string[];
    relevance_score: number;
  }
  
export interface Meta {
    found: number;
    returned: number;
    limit: number;
    page: number;
  }
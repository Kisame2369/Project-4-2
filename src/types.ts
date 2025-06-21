 export interface PhotoCollection {
    id: number;
    user: {
      name: string;
    };
    description: string;
   likes: number;
   alt_description: string;
    urls: {
      regular: string;
      small: string;
   };
  }

 export interface Topic {
    total: number;
    total_pages: number;
    results: PhotoCollection[];
  }
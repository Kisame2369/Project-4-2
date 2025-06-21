 export interface PhotoCollection {
   id: string;
    user: {
      name: string;
    };
   likes: number;
   alt_description: string | null;
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
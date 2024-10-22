export interface Proyecto {
    id: number;
    name: string;
    ki: number;
    maxKi: number;
    race: string;
    gender: string;
    description: string;
    image: string;
    affiliation: string;
    deletedAt: Date | null;
  }
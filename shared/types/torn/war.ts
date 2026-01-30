export type RankedWarReport = {
  id: number;
  start: number;
  end: number;
  winner: number;
  forfeit: boolean;
  factions: RankedWarFaction[];
};

export type RankedWarFaction = {
  id: number;
  name: string;
  score: number;
  attacks: number;
  rank: {
    before: string;
    after: string;
  };
  rewards: {
    respect: number;
    points: number;
    items: RankedWarItem[];
  };
  members: RankedWarMember[];
};

export type RankedWarItem = {
  id: number;
  name: string;
  quantity: number;
};

export type RankedWarMember = {
  id: number;
  name: string;
  level: number;
  attacks: number;
  score: number;
};

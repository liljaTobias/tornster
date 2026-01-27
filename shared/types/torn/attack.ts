export type Faction = {
  id: number;
  name: string;
};

export type Combatant = {
  id: number;
  name: string;
  level: number;
  faction: Faction;
};

export type FinishingHitEffect = {
  name: string;
  value: number;
};

export type AttackModifiers = {
  fair_fight: number;
  war: number;
  retaliation: number;
  group: number;
  overseas: number;
  chain: number;
  warlord: number;
};

export type AttackResult =
  | "None"
  | "Hospitalized"
  | "Mugged"
  | "Lost"
  | "Stalemate"
  | string;

export type Attack = {
  id: number;
  code: string;
  started: number;
  ended: number;
  attacker: Combatant;
  defender: Combatant;
  result: AttackResult;
  respect_gain: number;
  respect_loss: number;
  chain: number;
  is_interrupted: boolean;
  is_stealthed: boolean;
  is_raid: boolean;
  is_ranked_war: boolean;
  finishing_hit_effects: FinishingHitEffect[];
  modifiers: AttackModifiers;
};

export type PaginationLinks = {
  next?: string;
  prev?: string;
};

export type AttacksMetadata = {
  links: PaginationLinks;
};

export type AttacksResponse = {
  attacks: Attack[];
  _metadata: AttacksMetadata;
};

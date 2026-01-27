type Bar = {
  current: number;
  maximum: number;
};

export type Bars = {
  energy: Bar;
  life: Bar;
  nerve: Bar;
  happy: Bar;
  chain: {
    id: number;
    current: number;
    max: number;
    timeout: number;
    modifier: number;
    cooldown: number;
    start: number;
    end: number;
  };
};

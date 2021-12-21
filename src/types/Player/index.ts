export enum ClassesEnum {
  Wataru = 0,
  StellarHunter = 1,
  SolarTrouvere = 2,
  Slayer = 3,
  Saint = 4,
  Runemaster = 5,
  Ronin = 6,
  PhantonDance = 7,
  NoviceGuardian = 8,
  Ninja = 9,
  LunaDanseuse = 10,
  Lightbringer = 11,
  Gunslinger = 12,
  DragonFist = 13,
  Doram = 14,
  DivineAvenger = 15,
  Chronomancer = 16,
  BladeSoul = 17,
  Beggetter = 18,
  ArcaneMaster = 19,
}

export interface IPlayer {
  id: string;
  nickname: string;
  classID: number;
  guildName: string;
  wantsTobeLeader: boolean;
}

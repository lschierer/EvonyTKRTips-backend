import {  scope } from "arktype"

export const EvonyTypes = scope({

  BuffValue: {
    number: "number.integer > 0",
    unit: "('percentage' | 'flat')",
  },
  
  Buff: {
    marchSizeIncrease:      'BuffValue',
    attackIncrease:         'BuffValue',
    DefenseIncreae:         'BuffValue',
    HPIncrease:             'BuffValue',
    GroundAttackDebuff:     'BuffValue',
    RangedAttackDebuff:     'BuffValue',
    MountedAttakDebuff:     'BuffValue',
    SiegeAttackDebuff:      'BuffValue',
    OverallAttackDebuff:    'BuffValue',
    GroundToughnessDebuff:  'BuffValue',
    RangedToughnessDebuff:  'BuffValue',
    MountedToughnessDebuff: 'BuffValue',
    SiegeToughnessDebuff:   'BuffValue',
    OverallToughnessDebuff: 'BuffValue',
  },
  
  buffAttributes: "( 'Attack'| 'Attack Speed'| 'Death to Survival'| 'Death to Soul'| 'Death to Wounded'| 'Defense'| 'Deserter Capacity'| 'Double Items Drop Rate'| 'HP'| 'Healing Speed'| 'Hospital Capacity'| 'Leadership'| 'Load'| 'March Size Capacity'| 'March Time'| 'Marching Speed'| 'Marching Speed to Monsters'| 'MonstersAttack'| 'Politics'| 'Rally Capacity'| 'Range'| 'Resources Production'| 'Stamina cost'| 'SubCity Construction Speed'| 'SubCity Gold Production'| 'SubCity Training Speed'| 'SubCity Troop Capacity'| 'Training Capacity'| 'Training Speed'| 'Wounded to Death' )",
  
  buffConditions: "( 'Against Monsters'| 'Attacking'| 'Defending'| 'During SvS'| 'In City'| 'In Main City'| 'Marching'| 'Reinforcing'| 'When City Mayor'| 'When City Mayor for this SubCity'| 'When Defending Outside The Main City'| 'When Rallying'| 'When The Main Defense General'| 'When an officer'| 'brings a dragon'| 'brings dragon or beast to attack'| 'dragon to the attack'| 'leading the army to attack' )",
  
  debuffConditions: "( 'Enemy' | 'Enemy In City' | 'Reduces Enemy' | 'Reduces Enemy in Attack' | 'Reduces Enemy with a Dragon' | 'Reduces' )",
  
  buffClasses: "( 'Ground Troops' | 'Mounted Troops' | 'Ranged Troops' | 'Siege Machines' | 'All Troops' | 'Monsters' )",
  
  GeneralKeys: "( 'Ground Troops' | 'Mayor' | 'Mounted Troops' | 'Officer' | 'Ranged Troops' | 'Siege Machines' | 'Wall' )",
  
  specialityLevels: "( 'None' | 'Green' | 'Blue' | 'Purple' | 'Orange' | 'Gold' )",
  
  ascendingLevels: "( 'None' | '1Purple' | '2Purple' | '3Purple'| '4Purple' | '5Purple' | '1Red' | '2Red' | '3Red' | '4Red' | '5Red')",
  
  specialities: {
    'Green':  'Buff',
    'Blue':   'Buff',
    'Purple': 'Buff',
    'Orange': 'Buff',
    'Gold':   'Buff',
  },

  ascendingAttributes: {
    '1Purple?': 'Buff',
    '2Purple?': 'Buff',
    '3Purple?': 'Buff',
    '4Purple?': 'Buff',
    '5Purple?': 'Buff',
    '1Red?':    'Buff',
    '2Red?':    'Buff',
    '3Red?':    'Buff',
    '4Red?':    'Buff',
    '5Red?':    'Buff',
  },

  basicBook: {
    name: 'string',
    buff: 'Buff',
  },

  standardBook: {
    name: 'string',
    level: '1 <= number <= 4',
    buff: 'Buff',
  },

  general: {
    name: 'string',
    basicAttributes: {
      leadership: 'number.integer',
      attack: 'number.integer',
      defense: 'number.integer',
      politics: 'number.integer',
      leadership_increment: ' 0 < number < 10',
      attack_increment: ' 0 < number < 10',
      defense_increment: ' 0 < number < 10',
      politics_increment: ' 0 < number < 10',  
    },
    maxStars: 'ascendingLevels',
    level: '0< number.integer <= 45',
    type: 'GeneralKeys',
    builtInBook: 'basicBook',
    'otherBooks?': 'basicBook[]',
    specialities: 'specialities',
    ascendable: 'boolean',
    'ascendingAttributes?': 'ascendingAttributes',
  },

}).export();

export type BuffValue = typeof EvonyTypes.BuffValue.infer;

export type Buff = typeof EvonyTypes.Buff.infer;

export type buffAttributes = typeof EvonyTypes.buffAttributes.infer;

export type buffConditions = typeof EvonyTypes.buffConditions.infer;

export type debuffConditions = typeof EvonyTypes.debuffConditions.infer;

export type buffClasses = typeof EvonyTypes.buffClasses.infer;

export type GeneralKeys = typeof EvonyTypes.GeneralKeys.infer;

export type specialityLevels = typeof EvonyTypes.specialityLevels.infer;

export type ascendingLevels = typeof EvonyTypes.ascendingLevels.infer;

export type specialities = typeof EvonyTypes.specialities.infer;

export type ascendingAttributes = typeof EvonyTypes.ascendingAttributes.infer;

export type basicBook = typeof EvonyTypes.basicBook.infer;

export type standardBook = typeof EvonyTypes.standardBook.infer;

export type general = typeof EvonyTypes.general.infer;

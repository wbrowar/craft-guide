import { log } from './globals';

export interface WelcomeScriptPerson {
  loggedIn: boolean;
  muted: boolean;
  name: string;
  showSpeech: boolean;
  speech: string;
}
type WelcomeScriptPersonId = 0 | 1 | 2 | 3 | 4 | 5;
interface WelcomeScriptAction {
  event: string;
}
interface LogInAction extends WelcomeScriptAction {
  event: 'logIn';
  person: WelcomeScriptPersonId;
}
interface MuteAction extends WelcomeScriptAction {
  event: 'mute';
  person: WelcomeScriptPersonId;
}
interface TalkAction extends WelcomeScriptAction {
  event: 'talk';
  person: WelcomeScriptPersonId;
  text: string;
}
interface UnmuteAction extends WelcomeScriptAction {
  event: 'unmute';
  person: WelcomeScriptPersonId;
}

// Random list of popular names
export const welcomePeople: string[] = [
  'Andris',
  'Ben',
  'Brad',
  'Brandon',
  'Heidi',
  'Jason',
  'Leah',
  'Luke',
  'Matsuko',
  'Matt',
  'Nathaniel',
  'Oli',
];

// Actions script
export const welcomeScript: Record<number, LogInAction | MuteAction | TalkAction | UnmuteAction> = {
  60: {
    event: 'logIn',
    person: 0,
  },
  61: {
    event: 'unmute',
    person: 0,
  },
  200: {
    event: 'logIn',
    person: 1,
  },
  250: {
    event: 'unmute',
    person: 1,
  },
  350: {
    event: 'talk',
    person: 1,
    text: `Hey, PERSON_0.`,
  },
  500: {
    event: 'talk',
    person: 0,
    text: `Oh hi, PERSON_1.`,
  },
  700: {
    event: 'talk',
    person: 0,
    text: `How’s it going today?`,
  },
  940: {
    event: 'talk',
    person: 1,
    text: `Not too bad. You?`,
  },
  1040: {
    event: 'talk',
    person: 0,
    text: `Can’t complain.`,
  },
  1250: {
    event: 'mute',
    person: 0,
  },
  1400: {
    event: 'logIn',
    person: 2,
  },
  1500: {
    event: 'talk',
    person: 1,
    text: `Hey, PERSON_2.`,
  },
  1700: {
    event: 'talk',
    person: 1,
    text: `PERSON_2, I think you’re on mute.`,
  },
  1800: {
    event: 'unmute',
    person: 2,
  },
  1850: {
    event: 'talk',
    person: 2,
    text: `Oh, hey...`,
  },
  2000: {
    event: 'talk',
    person: 0,
    text: `Should we let them in?`,
  },
  2100: {
    event: 'talk',
    person: 2,
    text: `Yeah. Let’s do this.`,
  },
  2200: {
    event: 'logIn',
    person: 3,
  },
  2250: {
    event: 'logIn',
    person: 4,
  },
  2260: {
    event: 'logIn',
    person: 5,
  },
};

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

// Random list of totally random names
// If you would like to be added, please do a [pull request](https://github.com/wbrowar/craft-guide/pulls)!
export const welcomePeople: string[] = [
  'Andre',
  'Andrea',
  'Andrew',
  'Andris',
  'Ben',
  'Bob',
  'Brad',
  'Brandon',
  'Bryan',
  'Carlos',
  'Dana',
  'Daryl',
  'Debbie',
  'Dennis',
  'Divya',
  'Eka',
  'Eric',
  'Erwin',
  'Evan',
  'Florian',
  'Francesco',
  'Greg',
  'Heidi',
  'Hao',
  'Ian',
  'Jake,',
  'Jalen',
  'James',
  'Jason',
  'Javin',
  'Jen',
  'Jennifer',
  'John',
  'Johnny',
  'Jonathan',
  'Josh',
  'Justin',
  'Kai',
  'Karim',
  'Katie',
  'Kev',
  'Lak',
  'Lea',
  'Leah',
  'Lindsey',
  'Luke',
  'Marc',
  'Mark',
  'Marie',
  'Marissa',
  'Marion',
  'Matsuko',
  'Matt',
  'Mattias',
  'Max',
  'Michael',
  'Mike',
  'Mikkel',
  'Nathaniel',
  'Oli',
  'Oliver',
  'Olivia',
  'Patrick',
  'Paul',
  'Paulo',
  'Phil',
  'Philip',
  'Piotr',
  'Randsom',
  'Ryan',
  'Sam',
  'Sean',
  'Shawn',
  'Shawna',
  'Simon',
  'Stephen',
  'Stefanie',
  'Timothy',
  'Will',
  'Zach',
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
    person: 1,
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
  2285: {
    event: 'unmute',
    person: 4,
  },
  2290: {
    event: 'unmute',
    person: 3,
  },
  2300: {
    event: 'talk',
    person: 4,
    text: `Good morning, everyone.`,
  },
  2310: {
    event: 'talk',
    person: 3,
    text: `HI, everyone.`,
  },
  2500: {
    event: 'talk',
    person: 1,
    text: `Thanks for coming`,
  },
  2600: {
    event: 'talk',
    person: 1,
    text: `and thanks, PERSON_3, for setting this up.`,
  },
  2650: {
    event: 'talk',
    person: 3,
    text: `Sure thing.`,
  },
  2800: {
    event: 'talk',
    person: 1,
    text: `So we wanted to start by walking you through your site.`,
  },
  3000: {
    event: 'talk',
    person: 1,
    text: `You should have the PDF we sent you.`,
  },
  3100: {
    event: 'talk',
    person: 2,
    text: `Yeah, I printed it.`,
  },
  3140: {
    event: 'talk',
    person: 4,
    text: `Yes. I do.`,
  },
  3130: {
    event: 'talk',
    person: 3,
    text: `Yep!`,
  },
  3300: {
    event: 'talk',
    person: 1,
    text: `Okay, great.`,
  },
  3400: {
    event: 'talk',
    person: 1,
    text: `I’m going to start off by sharing my screen.`,
  },
  3410: {
    event: 'talk',
    person: 2,
    text: `ARF!`,
  },
  3600: {
    event: 'talk',
    person: 1,
    text: `Hmm.`,
  },
  3800: {
    event: 'talk',
    person: 1,
    text: `Something’s not working.`,
  },
  3900: {
    event: 'talk',
    person: 1,
    text: `I think I need to change my permissions.`,
  },
  4100: {
    event: 'talk',
    person: 1,
    text: `PERSON_2, are you able to share your screen?`,
  },
  4130: {
    event: 'mute',
    person: 4,
  },
  4300: {
    event: 'talk',
    person: 2,
    text: `Yeah, I can do that.`,
  },
  4490: {
    event: 'talk',
    person: 2,
    text: `ARF!`,
  },
  4500: {
    event: 'talk',
    person: 2,
    text: `Okay, can everybody see my screen?`,
  },
  4600: {
    event: 'talk',
    person: 3,
    text: `Um, I can’t.`,
  },
  4750: {
    event: 'talk',
    person: 1,
    text: `Me either.`,
  },
  5000: {
    event: 'talk',
    person: 2,
    text: `Okay. How about now?`,
  },
  5300: {
    event: 'talk',
    person: 1,
    text: `Still nothing.`,
  },
  5600: {
    event: 'talk',
    person: 2,
    text: `ARF!`,
  },
};

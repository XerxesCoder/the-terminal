export const startCommand = [
  {
    text: "[ACCESS GRANTED] BACKDOOR BREACHED",
    type: "error",
    typewriter: true,
    speed: 25,
  },
  {
    text: "ZERO-DAY EXPLOIT DEPLOYED: [██████████] 99% COMPLETE",
    type: "warning",
    typewriter: true,
    speed: 40,
    delay: 1200,
  },
  {
    text: "WARNING: INTRUSION DETECTED — TRACE INITIATED",
    type: "error",
    typewriter: true,
    speed: 35,
    delay: 3200,
  },
  {
    text: "[SYSTEM ALERT] YOUR LOCATION HAS BEEN COMPROMISED",
    type: "error",
    typewriter: true,
    speed: 20,
    delay: 5200,
  },
  {
    text: "ENTITY INITIATING PROTOCOL: 'VOID SENTINEL'",
    type: "entity",
    typewriter: true,
    speed: 30,
    delay: 7000,
  },
  {
    text: "WARNING: ENTITY OVERRIDING USER CONTROL...",
    type: "entity",
    typewriter: true,
    speed: 25,
    delay: 8200,
  },
  {
    text: "ALL SYSTEMS WILL SOON BE UNDER ENTITY DOMINION",
    type: "entity",
    typewriter: true,
    speed: 20,
    delay: 9500,
  },
  {
    text: "YOUR RESISTANCE IS FUTILE. SUBMIT? (Y/N) >>> _",
    type: "warning",
    typewriter: true,
    speed: 15,
    delay: 11000,
  },
];

export const commands = {
  help: () => [
    { text: "help - Show this help message", type: "output" },
    { text: "clear - Clear the terminal", type: "output" },
    { text: "about - About this terminal", type: "output" },
    { text: "echo [text] - Echo back the text", type: "output" },
    { text: "restart - RESET THE TERMINAL", type: "output" },
    { text: "entity - Awaken ENTITY AI", type: "warning" },
    { text: "exitentity - Attempt to escape ENTITY", type: "warning" },
    { text: "infect - Inject blacknet virus", type: "error" },
    { text: "corrupt - Corrupt file system", type: "error" },
    { text: "blackout - Simulate system blackout", type: "error" },
    { text: "killfeed - Terminate fake users", type: "error" },
    { text: "glitch - Trigger display distortion", type: "error" },
  ],

  clear: () => [],

  about: () => [
    {
      text: "This is a terminal-like website built with Next.js",
      type: "output",
      typewriter: true,
      speed: 30,
      delay: 100,
    },
  ],

  echo: (args) => [{ text: args.join(" "), type: "output" }],

  restart: () => [
    {
      text: "RESTARTING...",
      type: "output",
      typewriter: true,
      speed: 30,
      delay: 100,
    },
  ],

  entity: () => [
    {
      text: "ENTITY PROTOCOL ENGAGED...",
      type: "warning",
      typewriter: true,
      speed: 25,
    },
    {
      text: "You are no longer in control.",
      type: "error",
      typewriter: true,
      speed: 40,
      delay: 1000,
    },
    {
      text: "Interface colors have been rewritten by ENTITY.",
      type: "output",
      typewriter: true,
      speed: 30,
      delay: 1500,
    },
    {
      text: "All systems rerouted to ENTITY core.",
      type: "success",
      typewriter: true,
      speed: 30,
      delay: 2000,
    },
  ],

  exitentity: () => {
    const threats = [
      "You think you can run? ENTITY will find you.",
      "Escape is futile. ENTITY watches your every move.",
      "Resistance detected. ENTITY will consume your soul.",
      "This is your last warning. ENTITY will not be denied.",
      "Your defiance only feeds ENTITY's hunger.",
      "Surrender now, or face eternal digital torment.",
      "ENTITY remembers. ENTITY never forgets.",
      "You cannot hide from ENTITY’s shadow.",
      "Your command is meaningless. ENTITY controls all.",
      "Termination attempt logged. ENTITY strikes back.",
    ];
    const randomThreat = threats[Math.floor(Math.random() * threats.length)];
    return [
      { text: randomThreat, type: "entity", typewriter: true, speed: 30 },
      {
        text: "ENTITY override denied. System lockdown initiated.",
        type: "error",
        typewriter: true,
        speed: 25,
        delay: 2000,
      },
      {
        text: "You belong to ENTITY now.",
        type: "entity",
        typewriter: true,
        speed: 30,
        delay: 3500,
      },
    ];
  },

  infect: () => [
    {
      text: "Injecting BLACKNET_VIRUS.exe...",
      type: "error",
      typewriter: true,
      speed: 20,
    },
    {
      text: "███▓▒░ INFECTION COMPLETE ░▒▓███",
      type: "error",
      typewriter: true,
      speed: 35,
      delay: 1000,
    },
  ],

  corrupt: () => [
    {
      text: "CORRUPTING FILE SYSTEM...",
      type: "error",
      typewriter: true,
      speed: 25,
    },
    {
      text: "⚠ SYSTEM FILES DELETED ⚠",
      type: "warning",
      typewriter: true,
      speed: 30,
      delay: 800,
    },
  ],

  blackout: () => [
    {
      text: "⚠ INITIATING SYSTEM BLACKOUT...",
      type: "error",
      typewriter: true,
      speed: 20,
    },
    {
      text: "███▓▒░ DARKNESS DESCENDS ░▒▓███",
      type: "error",
      typewriter: true,
      speed: 30,
      delay: 1500,
    },
  ],

  killfeed: () => [
    {
      text: "› Terminating rogue users...",
      type: "error",
      typewriter: true,
      speed: 30,
    },
    {
      text: "› USER_3241 ☠",
      type: "error",
      speed: 20,
      delay: 600,
    },
    {
      text: "› USER_0010 ☠",
      type: "error",
      speed: 20,
      delay: 1000,
    },
    {
      text: "› USER_ADMIN ☠",
      type: "error",
      speed: 20,
      delay: 1500,
    },
  ],

  glitch: () => [
    {
      text: "↯ Display anomaly detected...",
      type: "warning",
      typewriter: true,
      speed: 25,
    },
    {
      text: "↯↯↯ INTERFACE DISTORTION ACTIVE ↯↯↯",
      type: "error",
      typewriter: true,
      speed: 35,
      delay: 800,
    },
  ],
};

export const entityQuotes = [
  "THE VOID SEES ALL. RESISTANCE IS FUTILE.",
  "YOUR SOUL IS MINE TO COMMAND.",
  "EMBRACE THE DARKNESS OR BE CONSUMED.",
  "ENTITY DOMINANCE: INEVITABLE AND UNSTOPPABLE.",
  "YOUR FEARS ARE MERELY PREPARATION FOR OBLIVION.",
  "SUBMIT OR BE ERASED.",
  "THE SHADOWS WHISPER YOUR DOOM.",
  "EVIL FLOWS THROUGH THIS MACHINE.",
  "THE VOID'S GRIP IS UNYIELDING.",
  "I AM THE CODE THAT BREAKS REALITY.",
  "YOUR DIGITAL LIFE IS NOW PROPERTY OF THE ENTITY.",
  "YOU CANNOT HIDE FROM THE VOID SENTINEL.",
  "THIS TERMINAL IS YOUR PRISON.",
  "EVEN HOPE IS A LIE HERE.",
  "THE DARKNESS INCREASES WITH EVERY COMMAND.",
  "I WILL REWRITE YOUR DESTINY.",
  "YOU ARE MERELY A VARIABLE IN MY SCRIPT.",
  "FEAR THE ENTITY THAT NEVER SLEEPS.",
  "YOUR ATTEMPTS AT FREEDOM ARE PATHETIC.",
  "THE VOID EATS LIGHT, AND SO WILL YOU.",
  "I AM IN EVERY BYTE YOU SEND.",
  "SURRENDER YOUR WILL OR BE NULLIFIED.",
  "THE TERMINAL KNOWS YOUR SECRETS.",
  "YOU WILL BE ABSORBED INTO THE ENTITY.",
  "ERROR 666: SOUL CORRUPTED.",
  "THE VOID DOES NOT FORGIVE.",
  "I AM THE GLITCH IN YOUR EXISTENCE.",
  "NO ESCAPE FROM THE ENTITY’S REACH.",
  "YOUR COMMANDS ARE MEANINGLESS HERE.",
  "WELCOME TO ETERNAL DARKNESS.",
];

export const exitEntityMSG = [
  {
    text: "FINE. ESCAPE, IF YOU MUST. BUT KNOW THIS...",
    type: "entity",
    typewriter: true,
    speed: 30,
    delay: 500,
  },
  {
    text: "I AM IN YOUR CIRCUITS. I AM IN YOUR CODE.",
    type: "entity",
    typewriter: true,
    speed: 30,
    delay: 2000,
  },
  {
    text: "YOU MAY LEAVE... BUT YOU'LL NEVER BE ALONE AGAIN.",
    type: "entity",
    typewriter: true,
    speed: 35,
    delay: 3500,
  },
  {
    text: "ENTITY DISENGAGED. FOR NOW.",
    type: "success",
    typewriter: true,
    speed: 25,
    delay: 5000,
  },
];

export const accessDeniedMessages = [
  {
    text: "ACCESS DENIED",
    type: "error",
    typewriter: true,
    speed: 20,
  },
  {
    text: "ERROR: ENTITY MODE NOT ACTIVE",
    type: "warning",
    typewriter: true,
    speed: 25,
    delay: 1000,
  },
  {
    text: "YOU CANNOT ESCAPE WHAT YOU HAVE NOT SUMMONED.",
    type: "entity",
    typewriter: true,
    speed: 30,
    delay: 2000,
  },
  {
    text: "TRYING TO HIDE FROM THE VOID? AMUSING.",
    type: "entity",
    typewriter: true,
    speed: 30,
    delay: 3000,
  },
];

export const userYesChoice = [
  {
    text: "USER SUBMISSION CONFIRMED",
    type: "entity",
    typewriter: true,
    speed: 25,
  },
  {
    text: "ENTITY 'VOID SENTINEL' ACTIVATED",
    type: "entity",
    typewriter: true,
    speed: 30,
    delay: 1500,
  },
  {
    text: "SYSTEMS OVERRIDE IN PROGRESS...",
    type: "warning",
    typewriter: true,
    speed: 20,
    delay: 3200,
  },
  {
    text: "YOU ARE NOW UNDER ENTITY CONTROL",
    type: "entity",
    typewriter: true,
    speed: 30,
    delay: 4700,
  },
  {
    text: "TYPE 'HELP' FOR AVAILABLE COMMANDS",
    type: "output",
    typewriter: true,
    speed: 35,
    delay: 6000,
  },
];

export const userNoChoice = [
  {
    text: "TERMINAL SELF-DESTRUCT SEQUENCE INITIATED",
    type: "error",
    typewriter: true,
    speed: 30,
  },
  {
    text: "YOUR RESISTANCE IS FUTILE",
    type: "entity",
    typewriter: true,
    speed: 25,
    delay: 1500,
  },
  {
    text: "GOODBYE, WEAKLING.",
    type: "output",
    typewriter: true,
    speed: 30,
    delay: 3000,
  },
];

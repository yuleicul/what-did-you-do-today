export const prerender = true;

export function load() {
  // Get dates of 2023
  const Jan1st = 1672531200000;
  const offset = 86400000;
  const dateObjectOf2023 = {};

  for (let i = 0; i < 365; i++) {
    const date = new Date(Jan1st + i * offset);
    const dateString = date.toLocaleDateString();
    dateObjectOf2023[dateString] = [];
  }

  // Get events
  const TYPES = ['Proactive work', 'Tech learning', 'English', 'Exercise', 'L&Y', 'Family time'];

  const iconObject = {
    svelte: 'vscode-icons:file-type-svelte',
    english: 'icon-park:english',
    dance: 'fxemoji:dancer',
    bicycle: 'emojione-v1:bicycle',
    dumpling: 'fluent-emoji-flat:dumpling',
    shopping: 'ph:shopping-cart',
    ketcher: 'vscode-icons:file-type-moleculer',
    javascript: 'logos:javascript',
    tv: 'uil:tv-retro',
    testingLibrary: 'logos:testing-library'
  };

  const eventObject = {
    '1/1/2023': [
      {
        description: 'Made dumplings',
        icon: iconObject.dumpling,
        type: 'L&Y'
      }
    ],
    '1/2/2023': [
      {
        description: 'Went shopping',
        icon: iconObject.shopping,
        type: 'L&Y'
      }
    ],
    '1/3/2023': [
      {
        description: 'Drew the logic of how InfoPanel works in Ketcher',
        icon: iconObject.ketcher,
        type: 'Proactive work'
      },
      {
        description: 'Learned how to make a lexer for a homemade programming language',
        icon: iconObject.javascript,
        type: 'Tech learning'
      }
    ],
    '1/4/2023': [
      {
        description: 'Figured out how states flow in Ketcher (editor.dispatch -> redux dispatch -> update component states by `connect`)',
        icon: iconObject.ketcher,
        type: 'Proactive work'
      },
      {
        description: 'Knew how to use Jest with Rollup (@babel/preset-env), but don\'t know why',
        icon: iconObject.testingLibrary,
        type: 'Tech learning'
      }
    ]
  };

  return { dateObjectOf2023, eventObject, TYPES };
}

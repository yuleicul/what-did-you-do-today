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
  const TYPES = ['Proactive work', 'English', 'Exercise', 'L&Y', 'Family time'];

  const iconObject = {
    svelte: 'vscode-icons:file-type-svelte',
    english: 'icon-park:english',
    dance: 'fxemoji:dancer',
    bicycle: 'emojione-v1:bicycle',
    dumpling: 'fluent-emoji-flat:dumpling',
    shopping: 'ph:shopping-cart',
    ketcher: 'vscode-icons:file-type-moleculer',
    javascript: 'logos:javascript',
    tv: 'uil:tv-retro'
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
        type: 'Proactive work'
      },
      {
        description: 'Learned English with Modern Family S01 E06',
        icon: iconObject.tv,
        type: 'English'
      }
    ]
  };

  return { dateObjectOf2023, eventObject, TYPES };
}

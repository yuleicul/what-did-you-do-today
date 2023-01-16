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
    testingLibrary: 'logos:testing-library',
    podcast: 'pajamas:podcast',
    travel: 'mdi:travel',
    discuss: 'healthicons:group-discussion-meeting-outline',
    coffee: 'iconoir:coffee-cup'
  };

  const eventObject = {
    '1/1/2023': [
      {
        description: 'Made dumplings',
        icon: iconObject.dumpling,
        type: 'L&Y',
        date: '1/1/2023'
      }
    ],
    '1/2/2023': [
      {
        description: 'Went shopping',
        icon: iconObject.shopping,
        type: 'L&Y',
        date: '1/2/2023'
      }
    ],
    '1/3/2023': [
      {
        description: 'Drew the logic of how InfoPanel works in Ketcher',
        icon: iconObject.ketcher,
        type: 'Proactive work',
        date: '1/3/2023'
      },
      {
        description: 'Learned how to make a lexer for a homemade programming language',
        icon: iconObject.javascript,
        type: 'Tech learning',
        date: '1/3/2023'
      }
    ],
    '1/4/2023': [
      {
        description:
          'Figured out how states flow in Ketcher (editor.dispatch -> redux dispatch -> update component states by `connect`)',
        icon: iconObject.ketcher,
        type: 'Proactive work',
        date: '1/4/2023'
      },
      {
        description: "Knew how to use Jest with Rollup (@babel/preset-env), but don't know why",
        icon: iconObject.testingLibrary,
        type: 'Tech learning',
        date: '1/4/2023'
      }
    ],
    '1/5/2023': [
      {
        description:
          'Learned knowledge of layerXY, clientXY, scrollTop and scrollLeft. To learn: Raphael.js and RxJS',
        icon: iconObject.ketcher,
        type: 'Proactive work',
        date: '1/5/2023'
      }
    ],
    '1/6/2023': [
      {
        description:
          "CSS is powerful...... I am poor. (The whole day's work finally is just one line css code)",
        icon: iconObject.ketcher,
        type: 'Proactive work',
        date: '1/6/2023'
      }
    ],
    '1/9/2023': [
      {
        description: 'Attachment atoms can be found in the .sdf file',
        icon: iconObject.ketcher,
        type: 'Proactive work',
        date: '1/9/2023'
      },
      {
        description: 'Read out loud React blog',
        icon: iconObject.english,
        type: 'English',
        date: '1/9/2023'
      }
    ],
    '1/12/2023': [
      {
        description: 'Frontend happy hour~',
        icon: iconObject.podcast,
        type: 'English',
        date: '1/12/2023'
      }
    ],
    '1/14/2023': [
      {
        description: 'Took train...',
        icon: iconObject.travel,
        type: 'L&Y',
        date: '1/14/2023'
      }
    ],
    '1/16/2023': [
      {
        description: 'Actually, OOP is good sometimes',
        icon: iconObject.ketcher,
        type: 'Proactive work',
        date: '1/16/2023'
      },
      {
        description: 'Spent two hours discussing SSR, Routing, Testing with Addy, my mentor and great partner',
        icon: iconObject.discuss,
        type: 'Tech learning',
        date: '1/16/2023'
      },
      {
        description: 'Coffee time, but mad at me due to work... I am so sorry',
        icon: iconObject.coffee,
        type: 'L&Y',
        date: '1/16/2023'
      }
    ]
  };

  return { dateObjectOf2023, eventObject, TYPES };
}

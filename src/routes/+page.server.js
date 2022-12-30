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
  const TYPES = ['Proactive work', 'Reactive work', 'Exercise', 'L&Y', 'Family time'];

  const iconObject = {
    svelte: 'vscode-icons:file-type-svelte',
    english: 'icon-park:english',
    dance: 'fxemoji:dancer',
    bicycle: 'emojione-v1:bicycle'
  };

  const eventObject = {
    '1/1/2023': [
      {
        description: 'Learn Svelte & SvelteKit',
        icon: iconObject.svelte,
        type: 'Proactive work'
      },
      {
        description: 'Learn English with TV Shows',
        icon: iconObject.english,
        type: 'Reactive work'
      }
    ]
  };

  return { dateObjectOf2023, eventObject, TYPES };
}

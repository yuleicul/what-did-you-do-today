export function load() {
  const typeTree = [
    {
      name: 'Reactive work',
      icon: '',
      children: [
        {
          name: 'Svelte',
          icon: 'vscode-icons:file-type-svelte'
        },
        {
          name: 'Learn English with TV Shows',
          icon: 'mingcute:tv-2-line'
        }
      ]
    },
    {
      name: 'Proactive work',
      icon: '',
      children: []
    },
    {
      name: 'Exercise',
      icon: '',
      children: [
        {
          name: 'Just Dance',
          icon: 'fxemoji:dancer'
        },
        {
          name: 'Spinning',
          icon: 'emojione-v1:bicycle'
        }
      ]
    },
    {
      name: 'Break',
      icon: '',
      children: [
        { name: 'Gaming', icon: 'icon-park:switch-nintendo' },
        { name: 'Film', icon: 'twemoji:film-projector' }
      ]
    },
    {
      name: 'L&Y',
      icon: '',
      children: []
    },
    {
      name: 'Family time',
      icon: '',
      children: []
    }
  ];
  return { typeTree };
}

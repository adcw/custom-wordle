// use('custom_wordle');
use('custom_wordle');

db.getCollection('games').insertOne({
  name: 'Simple Cars Game',
  description: 'guess based on body type and year',

  color: '#000000',
  icon: 'https://c0.klipartz.com/pngpicture/621/829/gratis-png-honda-cr-x-car-sexta-generacion-honda-civic-quinta-generacion-honda-civic-honda-thumbnail.png',
  backgroundImage:
    'https://preview.redd.it/0uermbt9q8b61.jpg?width=1080&crop=smart&auto=webp&s=b9262e919265f9db62809920a864be42850b2740',
  backgroundImageOpacity: 0.3,

  features: [
    {
      name: 'first appearance',
      type: 'date',
    },
    {
      name: 'production year',
      type: 'number',
    },
    {
      name: 'body type',
      type: 'string',
    },
  ],
  data: [
    {
      index: 0,
      name: 'Honda',
      'production year': 1948,
      'first appearance': new Date('1948-01-01'),
      'body type': 'hatchback',
    },
    {
      index: 1,
      name: 'Chevrolet',
      'production year': 1911,
      'first appearance': new Date('1911-01-01'),
      'body type': 'sedan',
    },
  ],
});

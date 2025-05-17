use('custom_wordle');

db.createCollection('games', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['_id', 'name', 'features', 'data'],
      properties: {
        _id: { bsonType: 'objectId' },
        name: { bsonType: 'string' },
        description: { bsonType: 'string' },

        color: { bsonType: 'string' },
        icon: { bsonType: 'string' },
        backgroundImage: { bsonType: 'string' },
        backgroundImageOpacity: { bsonType: 'number' },

        features: {
          bsonType: 'array',
          items: {
            bsonType: 'object',
            required: ['name', 'type'],
            properties: {
              name: { bsonType: 'string' },
              type: {
                bsonType: 'string',
                enum: ['string', 'number', 'boolean', 'date'],
              },
            },
          },
        },

        data: {
          bsonType: 'array',
          items: {
            bsonType: 'object',
            required: ['index', 'name'],
            properties: {
              index: { bsonType: 'int' },
              name: { bsonType: 'string' },
            },
          },
        },
      },
    },
  },
  validationLevel: 'strict',
  validationAction: 'error',
});

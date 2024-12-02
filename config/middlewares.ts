export default [
  'strapi::errors',
  {
    name: 'strapi::logger',
    config: {
      level: 'debug', // Enables detailed logging
    },
  },
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

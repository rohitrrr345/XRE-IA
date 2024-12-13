export default {
    routes: [
      {
        method: 'GET',
        path: '/customunit/:id',
        handler: 'unit.getUnitById',
        config: {
          policies: [],
          middlewares: [],
        },
      },
      {
        method: 'PUT',
        path: '/updateunit/:id',
        handler: 'unit.updateUnit',
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };
  
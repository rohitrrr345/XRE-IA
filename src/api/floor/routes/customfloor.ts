export default {
    routes: [
      {
        method: 'GET',
        path: '/customfloor/:id',
        handler: 'floor.getFloorById',
        config: {
          policies: [],
          middlewares: [],
        },
      },
      {
        
        method: 'PUT',
        path: '/updatefloor/:id',
        handler: 'floor.updateFloor',
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };
  
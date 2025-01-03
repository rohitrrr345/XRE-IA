export default {
    routes: [
      {
        method: 'GET',
        path: '/custom/:id',
        handler: 'property.getPropertyById',
        config: {
          policies: [],
          middlewares: [],
        },
      },
      {
        
            method: 'PUT',
            path: '/updateProperty/:id',
            handler: 'property.updateProperty',
            config: {
              policies: [],
              middlewares: [],
            },
          },
            {
            method: 'DELETE',
            path: '/deleteProperty/:id',
            handler: 'property.deleteProperty',
            config: {
              policies: [],
              middlewares: [],
            },
          },
      
    ],
  };

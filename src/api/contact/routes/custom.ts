export default {
    routes: [
      {
        method: 'GET',
        path: '/custom/contact/:id',
        handler: 'contact.getContactById',
        config: {
          policies: [],
          middlewares: [],
        },
      },
      {
        
            method: 'PUT',
            path: '/updatecontact/:id',
            handler: 'contact.updateContact',
            config: {
              policies: [],
              middlewares: [],
            },
          },
            {
            method: 'DELETE',
            path: '/deletecontact/:id',
            handler: 'contact.deleteContact',
            config: {
              policies: [],
              middlewares: [],
            },
          },
      
    ],
  };

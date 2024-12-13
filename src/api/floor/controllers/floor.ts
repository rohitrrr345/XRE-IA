/**
 * property controller
 */
import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::floor.floor', ({ strapi }) => ({
  // Custom function to fetch property by ID
  async getFloorById(ctx) {
    try {
      const { id } = ctx.params; // Extract 'id' from the request params

      // Fetch the property details
      const property = await strapi.db.query('api::floor.floor').findOne({
        where: { id },
      });

      // Check if the property exists
      if (!property) {
        return ctx.notFound('floor not found');
      }
   console.log("Items")
      // Send the property details as the response
      ctx.body = { data: property };
    } catch (error) {
        console.log("items")
      ctx.badRequest( { error: error.message });
    }
  },
  async updateFloor(ctx) {
    try {
      const { id } = ctx.params; // Extract 'id' from the request params
      const { data } = ctx.request.body; // Extract data from the request body

      // Check if the property exists
      const existingFloor = await strapi.db.query('api::floor.floor').findOne({
        where: { id },
      });

      if (!existingFloor) {
        return ctx.notFound('Floor not found');
      }

      // Update the property
      const updatedFloor = await strapi.db.query('api::floor.floor').update({
        where: { id },
        data,
      });

      // Return the updated property
      ctx.body = { data: updatedFloor };
    } catch (error) {
      ctx.badRequest( { error: error.message });
    }
  },

  
}));

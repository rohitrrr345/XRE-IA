/**
 * property controller
 */
import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::property.property', ({ strapi }) => ({
  // Custom function to fetch property by ID
  async getPropertyById(ctx) {
    try {
      const { id } = ctx.params; // Extract 'id' from the request params

      // Fetch the property details
      const property = await strapi.db.query('api::property.property').findOne({
        where: { id },
      });

      // Check if the property exists
      if (!property) {
        return ctx.notFound('Property not found');
      }
   console.log("Items")
      // Send the property details as the response
      ctx.body = { data: property };
    } catch (error) {
        console.log("items")
      ctx.badRequest( { error: error.message });
    }
  },
/**
 * property controller
 */

  // Custom function to update a property by ID
  async updateProperty(ctx) {
    try {
      const { id } = ctx.params; // Extract 'id' from the request params
      const { data } = ctx.request.body; // Extract data from the request body

      // Check if the property exists
      const existingProperty = await strapi.db.query('api::property.property').findOne({
        where: { id },
      });

      if (!existingProperty) {
        return ctx.notFound('Property not found');
      }

      // Update the property
      const updatedProperty = await strapi.db.query('api::property.property').update({
        where: { id },
        data,
      });

      // Return the updated property
      ctx.body = { data: updatedProperty };
    } catch (error) {
      ctx.badRequest( { error: error.message });
    }
  },
}));

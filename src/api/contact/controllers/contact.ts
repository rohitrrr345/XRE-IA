/**
 * contact controller
 */
import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::contact.contact', ({ strapi }) => ({
  // Custom function to fetch contact by ID
  async getContactById(ctx) {
    try {
      const { id } = ctx.params; // Extract 'id' from the request params

      // Fetch the contact details
      const contact = await strapi.db.query('api::contact.contact').findOne({
        where: { id },
      });

      // Check if the contact exists
      if (!contact) {
        return ctx.notFound('Contact not found');
      }
   console.log("Items")
      // Send the contact details as the response
      ctx.body = { data: contact };
    } catch (error) {
        console.log("items")
      ctx.badRequest( { error: error.message });
    }
  },
/**
 * contact controller
 */

  // Custom function to update a contact by ID
  async updateContact(ctx) {
    try {
      const { id } = ctx.params; // Extract 'id' from the request params
      const { data } = ctx.request.body; // Extract data from the request body
      console.log("items")

      // Check if the contact exists
      const existingProperty = await strapi.db.query('api::contact.contact').findOne({
        where: { id },
      });

      if (!existingProperty) {
        return ctx.notFound('Contact not found');
      }

      // Update the contact
      const updatedProperty = await strapi.db.query('api::contact.contact').update({
        where: { id },
        data,
      });

      // Return the updated contact
      ctx.body = { data: updatedProperty };
    } catch (error) {
      ctx.badRequest( { error: error.message });
    }
  },

    // Custom function to delete a contact by ID
    async deleteContact(ctx) {
      try {
        const { id } = ctx.params; // Extract 'id' from the request params

        // Check if the contact exists
        const existingProperty = await strapi.db.query('api::contact.contact').findOne({
          where: { id },
        });

        if (!existingProperty) {
          return ctx.notFound('Contact not found');
        }

        // Delete the contact
        const deletedProperty = await strapi.db.query('api::contact.contact').delete({
          where: { id },
        });

        // Return the deleted contact
        ctx.body = { data: deletedProperty };

      }
      catch (error) {
        ctx.badRequest( { error: error.message });
      }
    },
}));

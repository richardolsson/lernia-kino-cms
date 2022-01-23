'use strict';

/**
 *  review controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::review.review', ({ strapi }) => ({
  async create(ctx) {
    const data = ctx.request.body.data;
    if (data && !data.movie) {
      return ctx.badRequest('Missing movie');
    }
    return super.create(ctx);
  }
}));

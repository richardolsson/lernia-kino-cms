'use strict';

/**
 * screening service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::screening.screening');

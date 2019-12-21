'use strict';

/**
 * Bookdetails.js controller
 *
 * @description: A set of functions called "actions" for managing `Bookdetails`.
 */

module.exports = {

  /**
   * Retrieve bookdetails records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.bookdetails.search(ctx.query);
    } else {
      return strapi.services.bookdetails.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a bookdetails record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.bookdetails.fetch(ctx.params);
  },

  /**
   * Count bookdetails records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.bookdetails.count(ctx.query);
  },

  /**
   * Create a/an bookdetails record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.bookdetails.add(ctx.request.body);
  },

  /**
   * Update a/an bookdetails record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.bookdetails.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an bookdetails record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.bookdetails.remove(ctx.params);
  }
};

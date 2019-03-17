const Mutations = {
  async createUser(root, args, ctx, info) {
    const user = await ctx.db.mutation.createUser({
      data: { ...args } // destructure arguments into the data (name, etc.)
    }, info);
    return user;
  }
}

module.exports = Mutations;
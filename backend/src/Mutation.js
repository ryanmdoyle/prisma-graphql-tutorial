const Mutations = {
  async createUser(parent, args, context, info) {
    const user = await context.db.mutation.createUser({
      data: { ...args } // destructure arguments into the data (name, etc.)
    }, info);
    return user;
  }
}

module.exports = Mutations;
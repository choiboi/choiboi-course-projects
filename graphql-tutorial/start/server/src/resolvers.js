const { paginateResults } = require("./utils");

/*
 * Defining resolvers in a form of a map.
 * Args (<parent>, <args>, <context>, <info>)
 *  - parent: return value of the resolver for this field's parent
 *  - args: contains all graphQL arguments provided for this field
 *  - context: This object is shared across all resolvers that execute
 *             for a particular operation. Use this to share per-operation
 *             state, such as authentication information and access to data
 *             sources.
 *  - info: contains information about the execution state of the operation
 *
 * _ and __ are just fillers as we it won't be used.
 */
module.exports = {
  Query: {
    launches: async (_, { pageSize = 20, after }, { dataSources }) => {
      const allLaunches = await dataSources.launchAPI.getAllLaunches();
      allLaunches.reverse();
      const launches = paginateResults({
        after,
        pageSize,
        results: allLaunches
      });
      return {
        launches,
        cursor: launches.length ? launches[launches.length - 1].cursor : null,
        hasMore: launches.length ? launches[launches.length - 1].cursor !== allLaunches[allLaunches.length - 1].cursor : false
      };
    },
    launch: (_, { id }, { dataSources }) => dataSources.launchAPI.getLaunchById({ launchId: id }),
    me: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
  },
  Mission: {
    missionPatch: (mission, { size } = { size: 'LARGE' }) => {
      return size === 'SMALL' ? mission.missionPatchSmall : mission.missionPatchLarge;
    }
  },
  Launch: {
    isBooked: async (launch, _, { dataSources }) => dataSources.userAPI.isBookedOnLaunch({ launchId: launch.id })
  },
  User: {
    trips: async (_, __, { dataSources }) => {
      const launchIds = await dataSources.userAPI.getLaunchIdsByUser();
      if (!launchIds) return [];

      return (
        dataSources.launchAPI.getLaunchByIds({ launchIds }) || []
      );
    }
  }
};

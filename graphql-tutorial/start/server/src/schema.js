const { gql } = require('apollo-server');

const typeDefs = gql`
  """
  These define queries that clients can execute against the graph.
  """
  type Query {
    """
    Return an array of all upcoming Launches.

    launches takes two paramters:
    pageSize - return number of results, must be >= 1, default = 20
    after - optional cursor, returns whatever __after__
    and returns LaunchConnection type.
    """
    launches(
      pageSize: Int,
      after: String
    ): LaunchConnection!
    # Return a single Launch that matches with the provided id argument.
    launch(id: ID!): Launch
    # Return details of the logged in user.
    me: User
  }

  """
  Simple wrapper around our list of launches that contains a cursor to the last item
  in the list. Pass this cursor to the launches query to fetch results after these.
  """
  type LaunchConnection {
    # array of Launch.
    launches: [Launch]!
    # current position of data set
    cursor: String!
    # indicates if there are more data.
    hasMore: Boolean!
  }

  """
  These define methods that allows clients to modify data.
  """
  type Mutation {
    # Allows logged in users to booked multiple Launches.
    bookTrips(launchIds: [ID]!): TripUpdateResponse!
    # Allows logged in users to cancel previously booked trip.
    cancelTrip(launch: ID!): TripUpdateResponse!
    # Allows users to log in using their email.
    login(email: String): String
  }

  type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch]
  }

  """
  Defining object types that client side would interact with.
  """
  type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }

  type Rocket {
    id: ID!
    name: String
    type: String
  }

  type User {
    id: ID!
    email: String!
    # Array with type Launch as objects, and it can be empty but not null.
    trips: [Launch]!
  }

  type Mission {
    name: String
    missionPatch(size: PatchSize): String
  }

  enum PatchSize {
    SMALL
    LARGE
  }
`;

module.exports = typeDefs;

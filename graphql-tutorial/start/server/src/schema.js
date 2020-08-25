const { gql } = require('apollo-server');

const typeDefs = gql`
  """
  These define queries that clients can execute against the graph.
  """
  type Query {
    # Return an array of all upcoming Launches
    launches: [Launch]!
    # Return a single Launch that matches with the provided id argument.
    launch(id: ID!): Launch
    # Return details of the logged in user.
    me: User 
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
    missionPath(size: PatchSize): String
  }

  enum PatchSize {
    SMALL
    LARGE
  }
`;

module.exports = typeDefs;

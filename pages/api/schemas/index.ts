import { gql } from "apollo-server-micro";

export const typeDefs = gql`
    type Query {
    getUser(id: ID!): User
    getEvent(id: Int!): Event
    getEvents: [Event]
    hello: String
  }

  type Mutation {
    createUser(input: CreateUserInput): User
    updateUser(input: UpdateUserInput): User
    deleteUser(id: ID!): User
    createEvent(input: CreateEventInput): Event
    updateEvent(input: UpdateEventInput): Event
    deleteEvent(id: ID!): Event
    joinEvent(input: JoinEventInput): Event
    leaveEvent(input: LeaveEventInput): Event
  }

  scalar DateTime

  enum Role {
    USER
    ADMIN
  }

  type Event {
    id: Int!
    title: String!
    createdAt: DateTime!
    startAt: DateTime!
    description: String
    venue: String!
    hostId: String!
    host: User
    spots: Int!
    attendees: [User]
  }

  type User {
    id: ID!
    name: String!
    twitterId: String
    email: String
    role: Role!
    createdAt: DateTime!
    hostEvents: [Event]
    joinEvents: [Event]
  }

  input CreateUserInput {
    id: String
    name: String!
    twitterId: String
    email: String
    role: Role
  }

  input UpdateUserInput {
    name: String
    twitterId: String
    email: String
    role: Role
  }

  input CreateEventInput {
    title: String!
    startAt: DateTime!
    description: String
    venue: String!
    hostId: String
    spots: Int!
  }

  input UpdateEventInput {
    title: String
    startAt: DateTime
    description: String
    venue: String
    hostId: String
    spots: Int
  }

  input JoinEventInput {
    eventId: Int!
    userId: String!
  }

  input LeaveEventInput {
    eventId: Int!
    userId: String!
  }
`;
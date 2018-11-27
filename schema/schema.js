const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLInt
} = graphql;
const _ = require('lodash');

// dummy data:
const db = require('../db/dummyDb');

const NationType = new GraphQLObjectType({
  name: 'Nation',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    leagues: {
      type: new GraphQLList(LeagueType),
      resolve(parent, args) {
        return _.filter(db.leagues, { nationId: parent.id });
      }
    }
  })
});

const LeagueType = new GraphQLObjectType({
  name: 'League',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    nation: {
      type: NationType,
      resolve(parent, args) {
        // code!
        return _.find(db.nations, { id: parent.nationId });
      }
    },
    teams: {
      type: new GraphQLList(TeamType),
      resolve(parent, args) {
        return _.filter(db.teams, { leagueId: parent.id });
      }
    }
  })
});

const TeamType = new GraphQLObjectType({
  name: 'Team',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    league: {
      type: LeagueType,
      resolve(parent, args) {
        // Code !!
        return _.find(db.leagues, { id: parent.leagueId });
      }
    },
    leagueStanding: {
      type: LeagueStandingType,
      resolve(parent, args) {
        return _.find(db.leagueStanding, { teamId: parent.id });
      }
    }
  })
});

const LeagueStandingType = new GraphQLObjectType({
  name: 'LeagueStanding',
  fields: () => ({
    id: { type: GraphQLID },
    rank: { type: GraphQLInt },
    teamId: { type: GraphQLID },
    gamesPlayes: { type: GraphQLInt },
    wins: { type: GraphQLInt },
    draws: { type: GraphQLInt },
    losses: { type: GraphQLInt },
    goalsScored: { type: GraphQLInt },
    goalsConceded: { type: GraphQLInt },
    goalDifference: { type: GraphQLInt },
    points: { type: GraphQLInt }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    nation: {
      type: NationType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // Code To Fetch Data eg (args.id)
        return _.find(db.nations, { id: args.id });
      }
    },
    league: {
      type: LeagueType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // Code To Fetch Data eg (args.id)
        return _.find(db.leagues, { id: args.id });
      }
    },
    team: {
      type: TeamType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // Code To Fetch Data eg (args.id)
        return _.find(db.teams, { id: args.id });
      }
    },
    nations: {
      type: new GraphQLList(NationType),
      resolve(parent, args) {
        return db.nations;
      }
    },
    leagues: {
      type: new GraphQLList(LeagueType),
      resolve(parent, args) {
        return db.leagues;
      }
    },
    teams: {
      type: new GraphQLList(TeamType),
      resolve(parent, args) {
        return db.teams;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});

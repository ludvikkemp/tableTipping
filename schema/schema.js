const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLList
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
    }
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
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});

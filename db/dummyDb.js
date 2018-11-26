module.exports = {
  nations: [
    {
      id: 'ENG',
      name: 'England'
    },
    {
      id: 'ESP',
      name: 'Spain'
    },
    {
      id: 'GER',
      name: 'Germany'
    }
  ],
  leagues: [
    {
      id: 'EPL',
      name: 'Premier League',
      nationId: 'ENG'
    },
    {
      id: 'CHA',
      name: 'Championship',
      nationId: 'ENG'
    },
    {
      id: 'LGA',
      name: 'La Liga',
      nationId: 'ESP'
    },
    {
      id: 'BDL',
      name: 'Bundes Liga',
      nationId: 'GER'
    }
  ],
  teams: [
    {
      id: 'ARS',
      name: 'Arsenal FC',
      leagueId: 'EPL'
    },
    {
      id: 'LIV',
      name: 'Liverpool FC',
      leagueId: 'EPL'
    },
    {
      id: 'MCFC',
      name: 'Manchester City FC',
      leagueId: 'EPL'
    },
    {
      id: 'CFC',
      name: 'Chelsea FC',
      leagueId: 'EPL'
    },
    {
      id: 'TOT',
      name: 'Tottenham Hotspur',
      leagueId: 'EPL'
    },
    {
      id: 'FCB',
      name: 'FC Barcelona',
      leagueId: 'LGA'
    },
    {
      id: 'RMCF',
      name: 'Real Madrid Club de Football',
      leagueId: 'LGA'
    },
    {
      id: 'FCBA',
      name: 'FC Bayern Munchen',
      leagueId: 'BDL'
    },
    {
      id: 'BDO',
      name: 'Bourussia Dortmund',
      leagueId: 'BDL'
    }
  ],
  users: [
    {
      id: 'lulli',
      username: 'ludvikkemp',
      email: 'ludvikkemp@gmail.com'
    },
    {
      id: 'hauk',
      username: 'haukurmar',
      email: 'haukurmar@gmail.com'
    },
    {
      id: 'vic',
      username: 'victormees',
      email: 'victormees@gmail.com'
    }
  ]
};

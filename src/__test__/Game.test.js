import Game from '../Game'
import Player from '../Player'

describe('Game', () => {
  it('creates with a player', () => {
    const player = new Player('Player1')
    const game = new Game(player)

    expect(game.player()).toEqual(player)
  })

  it('creates bots', () => {
    const player = new Player('Player1')
    const game = new Game(player)

    game.bots().forEach((bot, i) => expect(bot.name()).toEqual(Game.botNames[i]))
  })
})

import Player from '../Player'

describe('Player', () => {
  it('creates with a name', () => {
    const name = 'Player1'
    const player = new Player(name)

    expect(player.name()).toEqual(name)
  })
})

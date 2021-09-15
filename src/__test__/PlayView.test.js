import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import PlayView from '../components/PlayView'

describe('PlayView', () => {
  const onPlay = jest.fn()
  let wrapper

  beforeEach(() => {
    wrapper = render(<PlayView onPlay={onPlay} />)
  })

  it('calls onPlay prop on form submission with name', () => {
    fireEvent.change(wrapper.getByLabelText(/Name/i), { target: { value: 'Player1' } })
    fireEvent.click(wrapper.getByText(/Play/i))

    expect(onPlay).toBeCalled()
    expect(onPlay).toBeCalledWith('Player1')
  })

  it('requires a name to be entered to play', () => {
    const nameInput = wrapper.getByLabelText(/Name/i)

    expect(nameInput.checkValidity()).toEqual(false)
  })
})

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import PlayView from '../components/PlayView'

describe('PlayView', () => {
  const onPlay = jest.fn()

  it('calls onPlay prop on form submission with name', () => {
    const wrapper = render(<PlayView onPlay={onPlay} />)

    fireEvent.change(wrapper.getByLabelText(/Name/i), { target: { value: 'Player1' } })
    fireEvent.click(wrapper.getByText(/Play/i))

    expect(onPlay).toBeCalled()
    expect(onPlay).toBeCalledWith('Player1')
  })

  it('requires a name to be entered to play', () => {
    const wrapper = render(<PlayView onPlay={onPlay} />)
    const nameInput = wrapper.getByLabelText(/Name/i)

    expect(nameInput.checkValidity()).toEqual(false)
  })
})

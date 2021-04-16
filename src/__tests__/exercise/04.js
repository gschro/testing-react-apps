// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'
import faker from 'faker'

test('submitting the form calls onSubmit with username and password', () => {
  const handleSubmit = jest.fn()
  const username = faker.internet.userName()
  const password = faker.internet.password()

  render(<Login onSubmit={handleSubmit} />)

  const usernameField = screen.getByLabelText(/username/i)
  const passwordField = screen.getByLabelText(/password/i)
  userEvent.type(usernameField, username)
  userEvent.type(passwordField, password)
  userEvent.click(screen.getByText('Submit'))

  expect(handleSubmit).toHaveBeenCalledWith({
    username,
    password,
  })
})

/*
eslint
  no-unused-vars: "off",
*/

import React from 'react';
import { TweetContextProvider } from '../src/context/TweetContext'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <TweetContextProvider>
       {Story() }
    </TweetContextProvider>
  )
]
import React from 'react'
import { LiveChatLoaderProvider, HelpScout } from 'react-live-chat-loader'
import type { NextPage } from 'next'

import Layout from '../layouts/main'
import ExampleLinks from '../components/exampleLinks'

const Page: NextPage = () => (
  <LiveChatLoaderProvider
    provider="helpScout"
    providerKey="8f156dc3-5bc4-4115-82f7-334644dbcfea"
  >
    <Layout title="React Live Chat Loader: Help Scout">
      <div className="wrapper">
        <div className="inner">
          <h1>React Live Chat Loader: Help Scout</h1>
          <p>
            This is an example implementation of the Help Scout beacon using{' '}
            <a href="https://github.com/calibreapp/react-live-chat-loader">
              react-live-chat-loader
            </a>
            .
          </p>
          <p>View other demos:</p>
          <ExampleLinks />
        </div>
      </div>
      <HelpScout />
    </Layout>
  </LiveChatLoaderProvider>
)

export default Page

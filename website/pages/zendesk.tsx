import React from 'react'
import { LiveChatLoaderProvider, Zendesk } from 'react-live-chat-loader'
import type { NextPage } from 'next'

import Layout from '../layouts/main'
import ExampleLinks from '../components/exampleLinks'

const Page: NextPage = () => (
  <LiveChatLoaderProvider
    provider="zendesk"
    providerKey="f34bce9c-2c9f-43b1-b528-f059fdb0a9ec"
  >
    <Layout title="React Live Chat Loader: Userlike">
      <div className="wrapper">
        <div className="inner">
          <h1>React Live Chat Loader: Zendesk</h1>
          <p>
            This is an example implementation of the Userlike chat widget using{' '}
            <a href="https://github.com/calibreapp/react-live-chat-loader">
              react-live-chat-loader
            </a>
            .
          </p>
          <p>View other demos:</p>
          <ExampleLinks />
        </div>
      </div>
      <Zendesk />
    </Layout>
  </LiveChatLoaderProvider>
)

export default Page

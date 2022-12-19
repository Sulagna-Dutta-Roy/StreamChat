import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, ChannelList, LoadingIndicator, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import { useClient } from './hooks/useClient';

import 'stream-chat-react/dist/css/v2/index.css';

const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic3RlZXAtc291bmQtOSIsImV4cCI6MTY3MTMyNTU5MX0.9cbmc_nsq0HhjXexnKpJppPqy8Qaz_SPIZucSPnMDQw';

const user = {
  id: 'steep-sound-9',
  name: 'steep',
  image: 'https://getstream.io/random_png/?id=steep-sound-9&name=steep',
};

const filters = { type: 'messaging', members: { $in: ['steep-sound-9'] } };
const sort = { last_message_at: -1 };

const App = () => {
  const chatClient = useClient({ apiKey: 'dz5f4d5kzrue', userData: user, tokenOrProvider: userToken });

  if (!chatClient) {
    return <LoadingIndicator />;
  }

  return (
    <Chat client={chatClient} theme='str-chat__theme-light'>
      <ChannelList filters={filters} sort={sort} />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default App;

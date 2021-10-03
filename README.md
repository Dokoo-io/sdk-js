# sdk-js

## Installation

```
yarn add @dokoo/sdk-js
```

## Usage

```
import { Client } from '@dokoo/sdk-js'

const main = async () => {
  const client = new Client({
    token: 'xxx',
    spaceId: 'xxx'
  })

  const feed = client.getFeed('<feed-id>')
  const { hits } = await feed.get()
  // Do something with hits
  console.log(hits)
}

main()
```

## API

### Class Client

#### `getFeed (id: string): Feed`

### Class Feed

#### `get(): Promise<FeedResult>`
  
#### `getEntity(entityId: string): Promise<FeedEntityResult>`
  
#### `search(request: FeedRequest): Promise<FeedResult>`

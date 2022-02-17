# sdk-js

## Installation

```
yarn add @dokoo/sdk-js
```

## Usage

```javascript
import { Client } from '@dokoo/sdk-js'

const main = async () => {
  const client = new Client({
    token: 'xxx'
  })

  const feed = client.feeds.getFeed('<feed-id>')
  const { hits } = await feed.get()
  // Do something with hits
  console.log(hits)
}

main()
```

import axios from 'axios'

export interface ClientOptions {
  spaceId?: string
  token: string
}

export interface FeedOptions {
  page?: number
  size?: number
}

export class Client {
  private _client
  constructor(
    private readonly options: ClientOptions
  ) {
    this._client = axios.create({
      headers: {
        'y-space-id': options.spaceId,
        'authorization': `Bearer ${options.token}`
      },
      baseURL: 'https://api.dokoo.io'
    })
  }

  async getFeed (feedId: string, feedOptions?: FeedOptions) {
    const { data } = await this._client.post(`/feeds/${feedId}/_search`, feedOptions)
    return data
  }
}

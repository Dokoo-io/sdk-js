import axios, {AxiosInstance} from 'axios'
import {FeedSearchOptions} from "../interfaces";

export class Feed {
  constructor(
    private readonly _client: AxiosInstance,
    public readonly feedId: string
  ) {}

  async get () {
    const { data } = await this._client.get(`/feeds/${this.feedId}`)
    return data
  }

  async getEntity (entityId: string) {
    const { data } = await this._client.get(`/feeds/${this.feedId}/e/${entityId}`)
    return data
  }

  async search (options: FeedSearchOptions) {
    const { data } = await this._client.post(`/feeds/${this.feedId}/_search`)
    return data
  }
}

export class Feeds {
  constructor (
    private readonly _client: AxiosInstance,
  ) {}

  getFeed (id: string): Feed {
    return new Feed(this._client, id)
  }
}

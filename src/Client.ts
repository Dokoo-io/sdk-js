import axios, {AxiosInstance} from 'axios'
import {Feeds} from "./apis/Feeds";

export interface ClientOptions {
  spaceId?: string
  token: string
}

export class Client {
  private readonly _client: AxiosInstance
  public readonly feeds: Feeds

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
    this.feeds = new Feeds(this._client)
  }
}

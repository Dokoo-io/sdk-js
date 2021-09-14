import {Client} from "../Client";

test('Client is working.', async () => {
  const client = new Client({
    spaceId: '6d0e4be2-9b6e-4297-8280-d2a1ce5273f8',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ5ZWxsYXctY21zIiwianRpIjoiMjhlOTU4NDYtZGIxOC00MThkLTkxMDYtOWMyYjIwZGIwY2RmIiwic3ViIjoidTI4UFZTQ0ZwME45dkt2SjQzMnlLSHd4WUVFMiIsImlhdCI6MTYzMTYxMTM3NH0.Min7KgOCn1WdjfgriWRvi709tDTX889SjPH5fy2TIto'
  })
  const feed = await client.getFeed('19fa14d6-7b78-4c53-bfaa-f6f7fd602d65', {
    page: 1,
    size: 10
  })
  expect(feed.hits.length).toBeTruthy()
})

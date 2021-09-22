import {Client} from "../Client";

test('Client is working.', async () => {
  const client = new Client({
    spaceId: '8e458923-64c8-402e-a6a5-48b1be4677ff',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ5ZWxsYXctY21zIiwianRpIjoiZWNjZDNlZmItYWE5MC00MTFmLWE4OTEtYmE3MjkxNWJhZmY4Iiwic3ViIjoidTI4UFZTQ0ZwME45dkt2SjQzMnlLSHd4WUVFMiIsImlhdCI6MTYzMTYyOTkxNX0.lkeyrQ6CCj5Tl_rBhovKLsm2o-9z_WEPp_ITA078_P8'
  })

  const feed = client.feeds.getFeed('0dacdbc8-9ec9-4418-b5e5-796968550a87')

  const response = await feed.search({
    page: 1,
    size: 10
  })
  expect(response.hits.length).toBeTruthy()
})

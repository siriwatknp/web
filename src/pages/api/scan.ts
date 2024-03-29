import type { NextApiRequest, NextApiResponse } from 'next'

const HOST = String(process.env.API ?? 'http://localhost:8080')

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
    let url = String(req.query.url)

    if (/^((http|https):\/\/)/.test(url) === false) {
      url = `http://${url}`
    }

    try {
      const data = await fetch(
        `${HOST}/api/scanWebsiteAsync?url=${encodeURI(url)}&baseHref=${
          req.query.baseHref || true
        }`,
        {
            method: "POST"
        }
      )
      const source = await data.json()

      res.json(source)
    } catch (e) {
      console.error(e)
      res.json({error: true, status: 404})
    }
}
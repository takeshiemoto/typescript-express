import { Request, Response } from 'express';
import * as http from 'http';

/**
 * /v1/search/address
 */
export const getAddressByPostCode = (req: Request, res: Response) => {
  const { postcode } = req.query;
  const _req = http.request(
    {
      hostname: `zipcloud.ibsnet.co.jp`,
      path: `/api/search?zipcode=${postcode}`,
      method: 'GET'
    },
    _res => {
      _res.setEncoding('utf8');
      _res.on('data', chunk => {
        return res.json(JSON.parse(chunk));
      });
      _res.on('error', () => {
        return res.json({ code: 500 });
      });
    }
  );
  _req.end();
};

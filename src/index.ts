import { Hono } from 'hono'

import { type, ArkErrors } from 'arktype';


import {
  EvonyTypes,
} from './types/EvonyTypes';

const app = new Hono();

// @ts-expect-error
const generalValidator = (o: Object) => {
  const out = EvonyTypes.general(o);
  if(out instanceof ArkErrors || out instanceof type.errors) {
    console.error("object recieved is not a EvonyTypes.general");
  }
  else {

  }
}

// @ts-expect-error
const NonApiRoutes = app
  .get(
    '/',
    (c) => {
      return c.json({ "title": "Game::EvonyTKR::Web home page"});
    }
  );


const route = app
  .get(
    '/generals',
    (c) => {
      return c.json({ "title": "General Home Page" } ); 
    }
  );

export type AppType = typeof route;

export default {
  port: 3000,
  fetch: app.fetch,
}

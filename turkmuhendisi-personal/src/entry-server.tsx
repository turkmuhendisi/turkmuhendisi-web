import { renderToString } from 'react-dom/server';
import * as helmetAsync from 'react-helmet-async';
import * as ReactRouterDom from 'react-router-dom';
import { AppLayout } from './App';

const { HelmetProvider } = (Reflect.get(helmetAsync as object, 'default') ?? helmetAsync) as typeof import('react-helmet-async');
const routerDom = (Reflect.get(ReactRouterDom as object, 'default') ?? ReactRouterDom) as typeof import('react-router-dom');
const { StaticRouter } = routerDom;

export const render = (url: string) => {
  const helmetContext: { helmet?: any } = {};

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppLayout />
      </StaticRouter>
    </HelmetProvider>
  );

  return {
    appHtml,
    helmet: helmetContext.helmet,
  };
};

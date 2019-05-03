import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import RendererWrapper0 from '/Users/bone/develop/antdesign-pro/src/pages/.umi/LocaleWrapper.jsx'
import _dvaDynamic from 'dva/dynamic'

let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/login",
    "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__Login__Login" */'../Login/Login'),
  LoadingComponent: require('/Users/bone/develop/antdesign-pro/src/components/PageLoading/index').default,
}),
    "exact": true
  },
  {
    "path": "/",
    "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../../layouts/BasicLayout'),
  LoadingComponent: require('/Users/bone/develop/antdesign-pro/src/components/PageLoading/index').default,
}),
    "Routes": [require('../Authorized').default],
    "routes": [
      {
        "path": "/",
        "redirect": "/dashboard/overview",
        "exact": true
      },
      {
        "path": "/dashboard",
        "icon": "form",
        "name": "数据统计",
        "exact": true
      },
      {
        "path": "/form",
        "icon": "form",
        "name": "form",
        "routes": [
          {
            "path": "/form/basic-form",
            "name": "basicform",
            "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Forms__models__form.js' */'/Users/bone/develop/antdesign-pro/src/pages/Forms/models/form.js').then(m => { return { namespace: 'form',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Forms__BasicForm" */'../Forms/BasicForm'),
  LoadingComponent: require('/Users/bone/develop/antdesign-pro/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/form/step-form",
            "name": "stepform",
            "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Forms__models__form.js' */'/Users/bone/develop/antdesign-pro/src/pages/Forms/models/form.js').then(m => { return { namespace: 'form',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Forms__StepForm" */'../Forms/StepForm'),
  LoadingComponent: require('/Users/bone/develop/antdesign-pro/src/components/PageLoading/index').default,
}),
            "hideChildrenInMenu": true,
            "routes": [
              {
                "path": "/form/step-form",
                "redirect": "/form/step-form/info",
                "exact": true
              },
              {
                "path": "/form/step-form/info",
                "name": "info",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Forms__models__form.js' */'/Users/bone/develop/antdesign-pro/src/pages/Forms/models/form.js').then(m => { return { namespace: 'form',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Forms__StepForm" */'../Forms/StepForm/Step1'),
  LoadingComponent: require('/Users/bone/develop/antdesign-pro/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/form/step-form/confirm",
                "name": "confirm",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Forms__models__form.js' */'/Users/bone/develop/antdesign-pro/src/pages/Forms/models/form.js').then(m => { return { namespace: 'form',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Forms__StepForm" */'../Forms/StepForm/Step2'),
  LoadingComponent: require('/Users/bone/develop/antdesign-pro/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "path": "/form/step-form/result",
                "name": "result",
                "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Forms__models__form.js' */'/Users/bone/develop/antdesign-pro/src/pages/Forms/models/form.js').then(m => { return { namespace: 'form',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Forms__StepForm" */'../Forms/StepForm/Step3'),
  LoadingComponent: require('/Users/bone/develop/antdesign-pro/src/components/PageLoading/index').default,
}),
                "exact": true
              },
              {
                "component": () => React.createElement(require('/Users/bone/develop/antdesign-pro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/form/advanced-form",
            "name": "advancedform",
            "authority": [
              "admin"
            ],
            "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__Forms__models__form.js' */'/Users/bone/develop/antdesign-pro/src/pages/Forms/models/form.js').then(m => { return { namespace: 'form',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__Forms__AdvancedForm" */'../Forms/AdvancedForm'),
  LoadingComponent: require('/Users/bone/develop/antdesign-pro/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/bone/develop/antdesign-pro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__404" */'../404'),
  LoadingComponent: require('/Users/bone/develop/antdesign-pro/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "component": () => React.createElement(require('/Users/bone/develop/antdesign-pro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('/Users/bone/develop/antdesign-pro/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  window.g_plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
window.g_history.listen(routeChangeHandler);
routeChangeHandler(window.g_history.location);

export default function RouterWrapper() {
  return (
<RendererWrapper0>
          <Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
        </RendererWrapper0>
  );
}

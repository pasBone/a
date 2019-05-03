/*
 * @Author: xiaojun.xiong
 * @Date: 2019-05-03 17:44:03
 * @Last Modified by: xiaojun.xiong
 * @Last Modified time: 2019-05-03 23:01:43
 */
export default [
  // userLogin
  {
    path: '/login',
    component: './Login/Login'
  },

  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // dashboard
      // { path: '/', redirect: '/dashboard/analysis', authority: ['admin', 'user'] },
      { path: '/', redirect: '/dashboard/overview' },
      {
        path: '/dashboard',
        icon: 'form',
        name: '数据统计',
        // routes: [
        //   {
        //     path: '/dashboard/overview',
        //     name: '数据总览',
        //     component: './Dashboard/Overview'
        //   }
        // ]
      },
      // forms
      {
        path: '/form',
        icon: 'form',
        name: 'form',
        routes: [
          {
            path: '/form/basic-form',
            name: 'basicform',
            component: './Forms/BasicForm'
          },
          {
            path: '/form/step-form',
            name: 'stepform',
            component: './Forms/StepForm',
            hideChildrenInMenu: true,
            routes: [
              {
                path: '/form/step-form',
                redirect: '/form/step-form/info'
              },
              {
                path: '/form/step-form/info',
                name: 'info',
                component: './Forms/StepForm/Step1'
              },
              {
                path: '/form/step-form/confirm',
                name: 'confirm',
                component: './Forms/StepForm/Step2'
              },
              {
                path: '/form/step-form/result',
                name: 'result',
                component: './Forms/StepForm/Step3'
              }
            ]
          },
          {
            path: '/form/advanced-form',
            name: 'advancedform',
            authority: ['admin'],
            component: './Forms/AdvancedForm'
          }
        ]
      },
      {
        component: '404'
      }
    ]
  }
]

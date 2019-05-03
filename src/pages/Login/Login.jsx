import React, { PureComponent } from 'react'
import { Form, Input, Icon, Checkbox, Button } from 'antd'
import { connect } from 'dva'
import styles from './style.less'

@connect(({ loading }) => {
  return {
    submitting: loading.effects['login/login']
  }
})
@Form.create()
class Login extends PureComponent {
  handleSubmit = e => {
    e.preventDefault()
    const {
      form: { validateFields },
      dispatch
    } = this.props
    validateFields((error, values) => {
      if (error) return
      console.log(values)
      dispatch({
        type: 'login/login',
        payload: {
          ...values
        }
      })
    })
  }

  render () {
    const {
      submitting,
      form: { getFieldDecorator }
    } = this.props

    return (
      <div className={styles.login}>
        <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
          <h1 className={styles.title}>e绿化管理后台</h1>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入您的账户！' }]
            })(
              <Input
                prefix={
                  <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder='账户'
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入您的密码！' }]
            })(
              <Input
                prefix={
                  <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type='password'
                placeholder='密码'
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true
            })(<Checkbox style={{ color: '#ffffff' }}>自动登录</Checkbox>)}
            <Button
              loading={submitting}
              type='primary'
              htmlType='submit'
              className={styles.loginFormButton}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
export default Login

const LoginPage = require('../PageObject/loginPage')

describe('Test authentication', function() {
  it('Should enter right login', function() {
    browser.url(`${browser.options.baseUrl}login`)
    LoginPage.enterLoginText('tomsmith')
    LoginPage.enterPasswordText('SuperSecretPassword!')
    LoginPage.clickLoginButton()
    expect(LoginPage.flashMessageText()).to.equal(
      'You logged into a secure area!\n×'
    )
  })
  it('Should logout', function() {
    LoginPage.clickLoginButton()
    expect(LoginPage.flashMessageText()).to.equal(
      'You logged out of the secure area!\n×'
    )
  })
  it('should enter wrong password', function() {
    LoginPage.enterLoginText('tomsmith')
    LoginPage.enterPasswordText('WrongPassword!')
    LoginPage.clickLoginButton()
    expect(LoginPage.flashMessageText()).to.equal(
      'Your password is invalid!\n×'
    )
  })
  it('should enter wrong username', function() {
    LoginPage.enterLoginText('user')
    LoginPage.enterPasswordText('WrongPassword!')
    LoginPage.clickLoginButton()
    expect(LoginPage.flashMessageText()).to.equal(
      'Your username is invalid!\n×'
    )
  })
})

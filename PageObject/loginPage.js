//const BasePage = require('./basePage')
import BasePage from './basePage'
class LoginPage extends BasePage {
  get loginField() {
    return $('#username')
  }
  get passwordField() {
    return $('#password')
  }
  get flashMessage() {
    return $('#flash-messages #flash')
  }
  get loginButton() {
    return $('.radius')
  }
  flashMessageText() {
    this.flashMessage.waitForDisplayed()
    return this.flashMessage.getText()
  }
  enterLoginText(text) {
    this.loginField.waitForDisplayed()
    this.loginField.setValue(text)
  }
  enterPasswordText(text) {
    this.passwordField.waitForDisplayed()
    this.passwordField.setValue(text)
  }
  clickLoginButton() {
    this.loginButton.waitForDisplayed()
    this.loginButton.click()
  }
}
//export default new LoginPage()
module.exports = new LoginPage()

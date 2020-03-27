const BasePage = require('../PageObject/basePage')
let basePage = new BasePage()
describe('Javascrypt Alerts', function() {
  it('should get text of alert', function() {
    browser.url(`${browser.options.baseUrl}javascript_alerts`)
    basePage.clickJavascriptAlertButton(1)
    assert.equal('I am a JS Alert', browser.getAlertText())
  })
  it('should accept alert', function() {
    browser.acceptAlert()
    assert.equal('You successfuly clicked an alert', basePage.getResultText())
  })
  it('should dismiss alert', function() {
    basePage.clickJavascriptAlertButton(2)
    browser.dismissAlert()
    assert.equal('You clicked: Cancel', basePage.getResultText())
  })
  it('should send test to the alert', function() {
    basePage.clickJavascriptAlertButton(3)
    browser.sendAlertText('This is some text')
    browser.acceptAlert()
    assert.equal('You entered: This is some text', basePage.getResultText())
  })
})

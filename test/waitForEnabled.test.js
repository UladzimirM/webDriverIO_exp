const BasePage = require('../PageObject/basePage')
let basePage = new BasePage()
describe('Wait for enabled', function() {
  it('should wait for the input field to be enabled', function() {
    browser.url(`${browser.options.baseUrl}dynamic_controls`)
    basePage.clickEnableButton()
    basePage.inputEnabledField.waitForEnabled(4000)
    assert.equal(true, basePage.inputEnabledField.isEnabled())
  })
  it('should wait for the input field to be disabled', function() {
    basePage.clickEnableButton()
    basePage.inputEnabledField.waitForEnabled(4000, true)
    assert.equal(false, basePage.inputEnabledField.isEnabled())
  })
})

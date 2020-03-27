const BasePage = require('../PageObject/basePage')
let basePage = new BasePage()
describe('Switch to iframe', function() {
  it('Should switch to iframe', function() {
    browser.url(`${browser.options.baseUrl}iframe`)
    basePage.h3Header.waitForDisplayed()
    basePage.iframe.waitForDisplayed()
    browser.switchToFrame(basePage.iframe)
    basePage.sendTextToBody('This is the text in the iframe body')
    assert.equal(
      'This is the text in the iframe body',
      basePage.iframeBody.getText()
    )
  })
})

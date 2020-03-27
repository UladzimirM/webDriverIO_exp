const BasePage = require('../PageObject/basePage')
let basePage = new BasePage()
describe('Switch window', function() {
  it('Should switch to the next window', function() {
    browser.url(`${browser.options.baseUrl}/windows`)
    basePage.clickHereLink()
    browser.switchWindow(`${browser.options.baseUrl}windows/new`)
    assert.equal(true, basePage.h3Header.isExisting())
    assert.equal(true, basePage.h3Header.isDisplayed())
    assert.equal('New Window', basePage.h3Header.getText())
  })
})

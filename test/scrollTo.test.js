const basePage = require('../PageObject/basePage')
describe('Scroll to Element', function() {
  it('should scroll to the footer', function() {
    browser.url('/')
    basePage.pageHeader.waitForDisplayed(1000, true)
    basePage.scrollToPageFooter()
    assert.equal(true, basePage.pageFooter.isDisplayedInViewport())
    browser.pause(1000)
  })
  // eslint-disable-next-line
  it.skip('should scroll into view', function() {
    browser.url('/')
    basePage.pageFooter.scrollIntoView()
    assert.equal(true, basePage.pageFooter.isDisplayedInViewport())
    browser.pause(1000)
  })
})

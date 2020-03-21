const basePage = require('../PageObject/basePage')
describe('Scroll to Element', function() {
  it('should scroll to the footer', function() {
    browser.url('/')
    basePage.pageHeader.waitForDisplayed()
    basePage.scrollToPageFooter()
    assert.equal(true, basePage.pageFooter.isDisplayedInViewport())
    browser.pause(1000)
  })
  it('should scroll into view', function() {
    browser.url('/')
    basePage.pageFooter.scrollIntoView()
    assert.equal(true, basePage.pageFooter.isDisplayedInViewport())
    browser.pause(1000)
  })
})

const basePage = require('../PageObject/basePage')
describe('Interacting with elements', function() {
  it('Get text for elements', function() {
    browser.url('/')
    let text = $('#page-footer').getText()
    console.log(text)
    basePage.getLiText()
    basePage.getSpecificElementText(3)
  })
  it('Is footer Displayed', function() {
    console.log(basePage.pageFooter.isDisplayed())
  })
  it('Doed=s the header exist?', function() {
    console.log(basePage.pageHeader.isExisting())
  })
  it('Is footer in viewport?', function() {
    console.log(basePage.pageFooter.isDisplayedInViewport())
  })
  it('Is header in viewport?', function() {
    console.log(basePage.pageHeader.isDisplayedInViewport())
  })
  it('Is subheader enabled', function() {
    console.log(basePage.subHeader.isEnabled())
  })
  it('Click element', function() {
    basePage.clickOnLink()
  })
})

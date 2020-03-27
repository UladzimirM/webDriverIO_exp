const BasePage = require('../PageObject/basePage')
let basePage = new BasePage()
describe('webdriverIO API Actions', function() {
  it('should hover on figure 1', function() {
    browser.url(`${browser.options.baseUrl}hovers`)
    basePage.hoverOnFigure(3)
    assert.equal('name: user1', basePage.getFigureDetailsText(3))
  })
  it('should hover on figure 2', function() {
    browser.url(`${browser.options.baseUrl}hovers`)
    basePage.hoverOnFigure(4)
    assert.equal('name: user2', basePage.getFigureDetailsText(4))
  })
  it('should hover on figure 3', function() {
    browser.url(`${browser.options.baseUrl}hovers`)
    basePage.hoverOnFigure(5)
    assert.equal('name: user3', basePage.getFigureDetailsText(5))
  })
  it('should send keyboard value Backspace', function() {
    browser.url(`${browser.options.baseUrl}/key_presses`)
    basePage.clickTargetValue()
    basePage.sendToTarget('\uE003')
    assert.equal('You entered: BACK_SPACE', basePage.getResultText())
  })
  it('should send keyboard value Tab', function() {
    browser.url(`${browser.options.baseUrl}/key_presses`)
    basePage.clickTargetValue()
    basePage.sendToTarget('\uE004')
    assert.equal('You entered: TAB', basePage.getResultText())
  })
  // prettier-ignore
  it('should send keyboard value Shift', function() {
    browser.url(`${browser.options.baseUrl}/key_presses`)
    basePage.clickTargetValue()
    basePage.sendToTarget("Shift")
    assert.equal('You entered: SHIFT', basePage.getResultText())
  })
})

const basePage = require('../PageObject/basePage')
describe('Test element action', function() {
  it('should click element', function() {
    browser.url('/')
    basePage.clickOnLink()
    expect(browser.getUrl()).to.equal(
      'http://the-internet.herokuapp.com/abtest'
    )
  })
  it('should get Text', function() {
    browser.url('/')
    expect(basePage.getSpecificElementText(1)).to.equal('A/B Testing')
  })
  it('should click checkbox', function() {
    basePage.clickLink(6)
    basePage.clickCheckBox(1)
    expect(basePage.checkboxes(1).isSelected()).to.equal(true)
  })
  it('should uncheck checkbox', function() {
    basePage.clickCheckBox(1)
    expect(basePage.checkboxes(1).isSelected()).to.equal(false)
  })
  it('should enter username', function() {
    browser.url(`${browser.options.baseUrl}/login`)
    basePage.enterUsename('Vladimir')
    assert.equal('Vladimir', basePage.username.getValue())
  })
  it('should enter password', function() {
    basePage.enterPassword('123')
    assert.equal('123', basePage.password.getValue())
  })
  it('should clear value', function() {
    basePage.username.click()
    basePage.username.clearValue()
    assert.equal('', basePage.username.getValue())
  })
})

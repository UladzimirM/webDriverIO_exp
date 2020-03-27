const BasePage = require('../../PageObject/basePage')
let basePage = new BasePage()
const loginData = require('../../data/loginData')
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
    basePage.enterUsename(loginData.userName)
    assert.equal(loginData.userName, basePage.username.getValue())
  })
  it('should enter password', function() {
    basePage.enterPassword(loginData.password)
    assert.equal(loginData.password, basePage.password.getValue())
  })
  it('should clear value', function() {
    basePage.username.click()
    basePage.username.clearValue()
    //assert.equal('', basePage.username.getValue())
    expect(basePage.username.getValue()).to.equal('')
  })
})

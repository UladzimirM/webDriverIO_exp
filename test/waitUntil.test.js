const basePage = require('../PageObject/basePage')
describe('Wait until', function() {
  it('should wait until the buttton text changes Add', function() {
    browser.url(`${browser.options.baseUrl}dynamic_controls`)
    basePage.clickPageButton()
    browser.waitUntil(
      () => {
        return basePage.pageButton.getText() === 'Add'
      },
      6000,
      'Expect button text to change'
    )
    assert.equal('Add', basePage.pageButton.getText())
  })
  it('should wait until the buttton text changes Remove', function() {
    basePage.clickPageButton()
    browser.waitUntil(
      () => {
        return basePage.pageButton.getText() === 'Remove'
      },
      6000,
      'Expect button text to change'
    )
    assert.equal('Remove', basePage.pageButton.getText())
  })
})

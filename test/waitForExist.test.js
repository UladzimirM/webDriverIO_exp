const basePage = require('../PageObject/basePage')
describe('Wait for exist', function() {
  it('should wait until the delete button exists', function() {
    browser.url(`${browser.options.baseUrl}add_remove_elements/`)
    basePage.clickExampleButton()
    basePage.deleteButton(1).waitForExist()
    assert.equal(true, basePage.deleteButton(1).isExisting())
  })
  it('should wait until the delete button to not exists', function() {
    basePage.clickDeleteButton(1)
    basePage.deleteButton(1).waitForExist(500, true)
    assert.equal(false, basePage.deleteButton(1).isExisting())
  })
})

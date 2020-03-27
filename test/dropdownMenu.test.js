const BasePage = require('../PageObject/basePage')

let basePage = new BasePage()
describe('Dropdown menu', function() {
  it('Shoudl select option 1', function() {
    browser.url(`${browser.options.baseUrl}dropdown`)
    basePage.clickDropdownMenu()
    basePage.clickDropdownMenuOption1()
    assert.equal(true, basePage.dropdownMenuOption1.isSelected())
  })
  it('Shoudl select option 2', function() {
    basePage.clickDropdownMenu()
    basePage.clickDropdownMenuOption2()
    assert.equal(true, basePage.dropdownMenuOption2.isSelected())
  })
})

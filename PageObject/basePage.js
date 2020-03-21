class BasePage {
  get pageHeader() {
    return $('h1.heading')
  }
  get subHeader() {
    return $('h2')
  }
  get h3Header() {
    return $('h3')
  }
  get pageFooter() {
    return $('#page-footer')
  }
  get parent() {
    return $('ul')
  }
  get childElements() {
    return this.parent.$$('li')
  }
  get firstLink() {
    return $('ul li:nth-child(1) a')
  }
  get username() {
    return $('#username')
  }
  get password() {
    return $('#password')
  }
  link(index) {
    return $(`ul li:nth-child(${index}) a`)
  }
  checkboxes(index) {
    return $(`#checkboxes input:nth-child(${index})`)
  }
  specificChildElement(index) {
    return this.parent.$(`li:nth-child(${index})`)
  }
  clickCheckBox(index) {
    this.checkboxes(index).waitForDisplayed()
    this.checkboxes(index).click()
  }
  getLiText() {
    this.childElements.filter(element => {
      console.log(element.getText())
    })
  }

  getSpecificElementText(index) {
    this.specificChildElement(index).waitForDisplayed()
    return this.specificChildElement(index).getText()
  }
  clickLink(index) {
    this.link(index).isDisplayed
    this.link(index).click()
  }
  clickOnLink() {
    if (this.firstLink.isDisplayed() === true) {
      this.firstLink.click()
    }
    this.h3Header.waitForDisplayed()
  }
  enterUsename(text) {
    this.username.waitForDisplayed()
    this.username.setValue(text)
  }
  enterPassword(text) {
    this.password.waitForDisplayed()
    this.password.setValue(text)
  }
}
module.exports = new BasePage()

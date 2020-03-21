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
  get targetValue() {
    return $('.example #target')
  }
  get resultValue() {
    return $('.example #result')
  }

  clickTargetValue() {
    this.targetValue.waitForDisplayed()
    this.targetValue.click()
  }
  sendToTarget(text) {
    this.targetValue.waitForDisplayed()
    this.targetValue.keys(text)
  }
  getResultText() {
    this.resultValue.waitForDisplayed()
    return this.resultValue.getText()
  }
  figures(index) {
    return $(`.example .figure:nth-child(${index}) img`)
  }
  figureDetails(index) {
    return $(`.example .figure:nth-child(${index}) .figcaption h5`)
  }

  hoverOnFigure(index) {
    this.figures(index).waitForDisplayed()
    this.figures(index).moveTo(1, 1)
  }
  getFigureDetailsText(index) {
    this.figureDetails(index).waitForDisplayed()
    return this.figureDetails(index).getText()
  }
  link(index) {
    return $(`ul li:nth-child(${index}) a`)
  }
  checkboxes(index) {
    return $(`#checkboxes input:nth-child(${index})`)
  }

  clickCheckBox(index) {
    this.checkboxes(index).waitForDisplayed()
    this.checkboxes(index).click()
  }
  specificChildElement(index) {
    return this.parent.$(`li:nth-child(${index})`)
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
    this.link(index).isDisplayed()
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

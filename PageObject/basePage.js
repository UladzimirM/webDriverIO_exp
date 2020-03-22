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
  get hereLink() {
    return $(' .example a')
  }
  get iframeBody() {
    return $('#tinymce')
  }
  get iframe() {
    return $('#mceu_27 #mce_0_ifr')
  }
  get columnA() {
    return $('#column-a')
  }
  get columnB() {
    return $('#column-b')
  }
  get columnAHeader() {
    return $('#column-a header')
  }
  get columnBHeader() {
    return $('#column-b header')
  }
  get dragggable() {
    return $('#draggable')
  }
  get droppable() {
    return $('#droppable')
  }
  get droppableTitle() {
    return $('#droppable p')
  }
  get dropdownMenu() {
    return $('#dropdown')
  }
  get dropdownMenuOption1() {
    return $('#dropdown option:nth-child(2)')
  }
  get dropdownMenuOption2() {
    return $('#dropdown option:nth-child(3)')
  }
  clickDropdownMenu() {
    this.dropdownMenu.waitForDisplayed()
    this.dropdownMenu.click()
  }
  clickDropdownMenuOption1() {
    this.dropdownMenuOption1.waitForDisplayed()
    this.dropdownMenuOption1.click()
  }
  clickDropdownMenuOption2() {
    this.dropdownMenuOption1.waitForDisplayed()
    this.dropdownMenuOption2.click()
  }
  dragDraggableToDroppable() {
    this.dragggable.waitForDisplayed()
    this.dragggable.dragAndDrop(this.droppable)
  }

  dragColumnAToColumnB() {
    this.columnA.waitForDisplayed()
    this.columnA.dragAndDrop(this.columnB)
  }
  sendTextToBody(text) {
    this.iframeBody.waitForDisplayed()
    this.iframeBody.clearValue()
    this.iframeBody.click()
    this.iframeBody.keys(text)
  }
  clickHereLink() {
    this.hereLink.waitForDisplayed()
    this.hereLink.click()
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
  scrollToPageFooter() {
    this.pageFooter.moveTo()
  }
  javascriptAlertButton(index) {
    return $(`.example li:nth-child(${index}) button`)
  }
  clickJavascriptAlertButton(index) {
    this.javascriptAlertButton(index).waitForDisplayed()
    this.javascriptAlertButton(index).click()
  }
}
module.exports = new BasePage()

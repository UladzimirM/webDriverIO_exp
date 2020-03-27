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
  get enabledButton() {
    return $('#input-example button')
  }
  get inputEnabledField() {
    return $('#input-example input')
  }
  get exampleButton() {
    return $('.example button')
  }
  get pageButton() {
    return $('#checkbox-example button')
  }
  deleteButton(index) {
    return $(`#elements button:nth-child(${index})`)
  }
  figures(index) {
    return $(`.example .figure:nth-child(${index}) img`)
  }
  figureDetails(index) {
    return $(`.example .figure:nth-child(${index}) .figcaption h5`)
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
  javascriptAlertButton(index) {
    return $(`.example li:nth-child(${index}) button`)
  }

  clickPageButton() {
    this.pageButton.waitForDisplayed()
    this.pageButton.click()
  }

  clickExampleButton() {
    this.exampleButton.waitForDisplayed()
    this.exampleButton.click()
  }
  clickDeleteButton(index) {
    this.deleteButton(index).waitForDisplayed()
    this.deleteButton(index).click()
  }
  clickEnableButton() {
    this.enabledButton.waitForDisplayed()
    this.enabledButton.click()
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

  hoverOnFigure(index) {
    this.figures(index).waitForDisplayed()
    this.figures(index).moveTo(1, 1)
  }
  getFigureDetailsText(index) {
    this.figureDetails(index).waitForDisplayed()
    return this.figureDetails(index).getText()
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
  clickJavascriptAlertButton(index) {
    this.javascriptAlertButton(index).waitForDisplayed()
    this.javascriptAlertButton(index).click()
  }
}
export default BasePage
//module.exports = BasePage

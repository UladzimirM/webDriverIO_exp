const basePage = require('../PageObject/basePage')
describe('Drag and Drop', function() {
  // eslint-disable-next-line
  it.skip('should drag columnA to columnB', function() {
    browser.url(`${browser.options.baseUrl}drag_and_drop`)
    basePage.dragColumnAToColumnB()
    assert.equal('A', basePage.columnBHeader.getText())
  })

  it('should drag and drop', function() {
    browser.url('https://crossbrowsertesting.github.io/drag-and-drop.html')
    basePage.dragDraggableToDroppable()
    assert.equal('Dropped!', basePage.droppableTitle.getText())
  })
})

describe("Interacting with elements", function () {
  it("Get text for elements", ()=> {
      browser.url('/')
      let text = $("#page-footer").getText()
      console.log(text)
  })
})
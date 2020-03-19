const internetPage = require("../page/internet.page");
describe("Interacting with elements", function() {
  it("Get text for elements", function() {
    browser.url("/");
    let text = $("#page-footer").getText();
    console.log(text);
    internetPage.getLiText();
    internetPage.getSpecificElementText(3);
  });
  it("Is footer Displayed", function() {
    console.log(internetPage.pageFooter.isDisplayed());
  });
  it("Doed=s the header exist?", function() {
    console.log(internetPage.pageHeader.isExisting());
  });
  it("Is footer in viewport?", function() {
    console.log(internetPage.pageFooter.isDisplayedInViewport());
  });
  it("Is header in viewport?", function() {
    console.log(internetPage.pageHeader.isDisplayedInViewport());
  });
  it("Is subheader enabled", function() {
    console.log(internetPage.subHeader.isEnabled());
  });
  it("Click element", function() {
    internetPage.clickOnLink();
  });
});

const internetPage = require("../page/internet.page");
describe("Interacting with elements", function() {
  it("Get text for elements", function() {
    browser.url("/");
    let text = $("#page-footer").getText();
    console.log(text);
    internetPage.getLiText();
    internetPage.getSpecificElementText(3);
  });
});

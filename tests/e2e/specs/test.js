// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  "default e2e tests": browser => {
    ///
    /// We did this in clases
    ///
    browser
      .init()
      .waitForElementVisible("#app") // *[@id="app"]
      .assert.elementPresent(".hello") // [@id="app"]/div[2]/div/h1   !==  [@id="app"]/div[3]/div/h1
      .assert.containsText("h1", "Welcome to Your Vue.js App")
      .assert.elementCount("img", 1)
      .setValue("input[id=input-to-edit]", "probrando un valor")
      .pause(3000)
      .click("#btn-show-hi")
      .pause(3000)
      .end();
  },

  "example e2e test using a custom command": browser => {
    browser
      .openHomepage()
      .assert.elementPresent(".hello")
      .end();
  }
};

module.exports = {

  GoToUrl: function (browser) {
    const homepageTitleName = "December Labs: UX/UI Design and Mobile App & Web Development";
    let homepage = browser.page.HomepagePO();

    homepage
      .maximizeWindow()
      .navigate()
      .assert.titleEquals(homepageTitleName);
  },

  OpenGetInTouchModal: function (browser) {
    this.GoToUrl(browser);
    let homepage = browser.page.HomepagePO();
    let getInTouchModal = browser.page.GetTouchModalPO();

    homepage
      .waitForElementVisible('@getInTouchButton')
      .click('@getInTouchButton')
      .waitForElementVisible('@getInTouchModal')
    getInTouchModal
      .waitForElementVisible('@modalTitle')
      .pause(2000)
  }
};
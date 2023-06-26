const HelperFunctions = require("../HelperFunctions");

module.exports = {

    "Click on GetInTouch Button - Gets the modal Open": browser => {
        HelperFunctions.OpenGetInTouchModal(browser);
        let getInTouchModal = browser.page.GetTouchModalPO();
        getInTouchModal
            .assert.textEquals('@modalTitle', 'Get In Touch')
    }

};
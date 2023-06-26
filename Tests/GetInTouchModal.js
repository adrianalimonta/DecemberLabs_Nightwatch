
const HelperFunctions = require("../HelperFunctions");
const redBorderAttribute = "wpforms-error";
const sendBtn = "#wpforms-submit-872";
const priorityFields = ['@nameInp', '@emailInp', '@companyInp', '@messageInp'];

module.exports = {

    "Priority fields - Correctly displayed": browser => {

        HelperFunctions.OpenGetInTouchModal(browser);
        const placeholdersTexts = ["Write your name here", "Write your email here", "Write your company name here", "Write your message here"];
        const attribute = "placeholder";
        let modal = browser.page.GetTouchModalPO();

        for (let i = 0; i < priorityFields.length; i++) {
            modal
                .assert.visible(priorityFields[i])
                .assert.attributeContains(priorityFields[i], attribute, placeholdersTexts[i])
        }

    },


    "Click in Send button with Priority empty fields - Shows border'fields in red": browser => {

        HelperFunctions.OpenGetInTouchModal(browser);
        let modal = browser.page.GetTouchModalPO();
        const attribute = "class";

        for (let i = 0; i < priorityFields.length; i++) {
            modal
                .assert.visible(priorityFields[i])
                .assert.not.attributeContains(priorityFields[i], attribute, redBorderAttribute)
        }

        modal
            .click(sendBtn)
            .pause(2000)

        for (let i = 0; i < priorityFields.length; i++) {
            modal
                .assert.visible(priorityFields[i])
                .assert.attributeContains(priorityFields[i], attribute, redBorderAttribute)
        }
    },

    "Fullfilling Priority empty fields - Eliminate the red border color": browser => {

        HelperFunctions.OpenGetInTouchModal(browser);
        const textToSend = ["Adriana Limonta", "adriana.libertad18@gmail.com", "DecemberLabs", "This is an ordinary text"];
        let modal = browser.page.GetTouchModalPO();
        const attribute = "class";

        modal
            .click(sendBtn)
            .pause(2000)

        for (let i = 0; i < priorityFields.length; i++) {
            modal.assert.attributeContains(priorityFields[i], attribute, redBorderAttribute)
        }
        for (let i = 0; i < priorityFields.length; i++) {
            modal
                .setValue(priorityFields[i], textToSend[i])
                .assert.not.attributeContains(priorityFields[i], attribute, redBorderAttribute)
        }
    }
};
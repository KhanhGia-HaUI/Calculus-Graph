"use strict";
export var Disable;
(function (Disable) {
    function DivItem(div, item) {
        // Unfinished
        const html_document = document.getElementById(div);
        if (html_document != undefined && html_document != null && html_document != void 0) {
            const items_remove = html_document.querySelectorAll(item);
            //#region 
            for (const item of items_remove) {
                item.disabled = true;
            }
            //#endregion
        }
        ;
        return;
    }
    Disable.DivItem = DivItem;
})(Disable || (Disable = {}));

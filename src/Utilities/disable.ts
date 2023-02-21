"use strict";
export namespace Disable {
    export function DivItem(div: string, item: string): void {
        // Unfinished
        const html_document = document.getElementById(div);
        if (html_document != undefined && html_document != null && html_document != void 0) {
            const items_remove = html_document.querySelectorAll(item);
            //#region 
            for (const item of items_remove) {
                (item as HTMLInputElement | HTMLButtonElement | HTMLTextAreaElement).disabled = true;
            }
            //#endregion
        };
        return
    }
}
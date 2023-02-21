"use strict";
export namespace Theme {
    export function Change(): void {
        const toggleBtn = document.querySelector('#darkmode-toggle');
        const themeBtn = document.querySelectorAll('.darkmode-toggle-display');
        themeBtn.forEach((e)=>{
            (e as HTMLElement).style.boxShadow = '';
        })
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                document.body.classList.toggle('dark-theme');
                toggleBtn.querySelector('span:first-child')?.classList.toggle('active');
                toggleBtn.querySelector('span:first-child')?.classList.toggle('active');
            })
        }
    }
}
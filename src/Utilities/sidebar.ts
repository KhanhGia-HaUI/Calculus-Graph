"use strict";
export namespace SideBar {
    // Disable When Turn On Sidebar for Phone User only
    export function PhoneOptimization(displayType: string): void {
        const themeBtn: any = document.querySelector('.theme-btn');
        const toggleDisplay: any = document.querySelector('.darkmode-toggle-display');
        if (window.innerWidth <= 600) {
            themeBtn.style.display = displayType;
            if(displayType == "block"){
                toggleDisplay.style.display = "inline-block";
            }
        }
        return
    }

    export function ShowSideBar(): void {
        const menuBtn: HTMLElement | null = document.querySelector("#menu-btn");
        const closeBtn: HTMLElement | null = document.querySelector("#close-btn");
        const sidebar: HTMLElement | null = document.querySelector("aside");
        if (sidebar) {
            menuBtn?.addEventListener('click', () => {
                sidebar.style.display = 'block';
                sidebar.style.transition = 'all 0.5s ease-in-out';
                PhoneOptimization("none");
            });
            closeBtn?.addEventListener('click', () => {
                sidebar.style.display = 'none';
                sidebar.style.transition = 'all 0.5s ease-in-out';
                PhoneOptimization("block");
            });
        }
    }

    export async function ChangeDisplay(e: any): Promise<void> {
        const sidebar_element_a_active = document.querySelector('.sidebar .active');
        //#region 
        const sidebar_element_need_active = (e);
        sidebar_element_a_active?.classList.remove('active');
        sidebar_element_need_active.classList.add('active');
        //#endregion
        return;
    }

    export function AddOnClickFunctionOnSideBarClass(): void {
        document.addEventListener('DOMContentLoaded', async () => {
            const sidebar = document.querySelectorAll('.sidebar a');
            sidebar.forEach(function (sidebar_child) {
                (sidebar_child as any).onclick = function () {
                    SideBar.ChangeDisplay(this);
                }
            })
            return
        });
        return;
    }
}
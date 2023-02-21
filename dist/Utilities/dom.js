"use strict";
export var WebItem;
(function (WebItem) {
    /*----------Strict Requirement----------*/
    class Restriction {
    }
    WebItem.Restriction = Restriction;
    /*----------DOMElement----------*/
    class DOMElement extends Restriction {
        /*----------Method must be private, unaccessable outisde the class----------*/
        element;
        constructor(tagName) {
            super();
            this.element = document.createElement(tagName);
        }
        /*----------Never use this----------*/
        error(error) {
            throw new Error(error);
        }
        /*----------Append Text Content----------*/
        addText(...params) {
            let text = '';
            params.forEach((param) => {
                text += param;
            });
            this.element.textContent = text;
            return this;
        }
        /*----------Add multiple classes with spread----------*/
        addClass(...params) {
            params.forEach((className) => {
                this.element.classList.add(className);
            });
            return this;
        }
        /*----------Set an attribute easily----------*/
        addAttribute(name, value) {
            this.element.setAttribute(name, value);
            return this;
        }
        /*----------Set an event Listener easy----------*/
        addEvent(eventName, handler) {
            this.element.addEventListener(eventName, handler);
            return this;
        }
        /*----------Append Child to the DOM Elements----------*/
        appendTo(parent) {
            parent.appendChild(this.element);
            return this;
        }
        /*----------append the element----------*/
        append(...children) {
            children.forEach(child => this.element.appendChild(child.element));
            return this;
        }
    }
    WebItem.DOMElement = DOMElement;
    function CollapsedButton(collapseSide) {
        const collapseButton = document.querySelector('.collapse-button');
        const collapseArea = (collapseSide);
        if (collapseButton) {
            collapseButton.addEventListener('click', () => {
                if (collapseArea) {
                    const _check_collapse_icon_changer_for_span_display_ = collapseArea.classList.toggle('collapsed');
                    const span_icon_area_data = collapseButton.querySelector("span");
                    if (_check_collapse_icon_changer_for_span_display_) {
                        if (span_icon_area_data) {
                            span_icon_area_data.innerText = "expand_more";
                        }
                    }
                    else {
                        if (span_icon_area_data) {
                            span_icon_area_data.innerText = "expand_less";
                        }
                    }
                }
            });
        }
        return;
    }
    WebItem.CollapsedButton = CollapsedButton;
    function AddCollapseToBtn() {
        const BtnArray = document.querySelectorAll("div .collapse-button");
        BtnArray.forEach(function (e) {
            if (e) {
                CollapsedButton(e.parentNode.querySelector(".form-details"));
            }
        });
        return;
    }
    WebItem.AddCollapseToBtn = AddCollapseToBtn;
})(WebItem || (WebItem = {}));

import { html, LitElement } from 'lit';
import { property } from 'lit/decorators/property.js';
import { customElement } from 'lit/decorators/custom-element.js';
import {
  scaleY,
  translateToLeft,
  translateToRight,
  translateZ,
} from './animation';
import { styles as defaultStyles } from './styles';
import { ClassInfo, classMap } from 'lit/directives/class-map.js';
import { Animation, Orientation } from './types';

@customElement('azl-dropdown')
export class Dropdown extends LitElement {
  //#region Component reactive properties
  @property({ type: String, attribute: 'orientation' })
  orientation: Orientation = 'right';
  @property({ type: String, attribute: 'animation' })
  animation: Animation = 'scaleY';
  @property({ type: String })
  text!: string;
  @property({ type: String, attribute: 'class' })
  set classClass(value: string) {
    let object$: ClassInfo = {};
    for (const item of value.split(' ')) {
      object$ = { ...object$, [item]: true };
    }
    this._class = object$;
  }
  //#endregion Component reactive properties

  // Class private properties
  private _class: ClassInfo = {};

  static override get styles() {
    return [
      defaultStyles,
      scaleY,
      translateToLeft,
      translateToRight,
      translateZ,
    ];
  }

  getMenuClass() {
    let classes: ClassInfo = {};
    if (this.orientation) {
      classes = { [this.orientation]: true };
    }
    if (this.animation) {
      classes = { ...classes, [this.animation]: true };
    }
    return classes;
  }

  override render() {
    const menuClasses = this.getMenuClass();
    return html`
      <div class="dropdown ${classMap(this._class)}">
        ${this.text}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="icon chevron-down"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
        <div class="dropdown-menu${classMap(menuClasses)}">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'azl-dropdown': Dropdown;
  }
}

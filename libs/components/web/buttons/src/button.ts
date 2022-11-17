import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('sashimi-button')
export class Button extends LitElement {
    static styles = css`
        :host {
            display: inline-block;
        }

        button {
            background-color: #1b78e4;
            border: none;
            border-radius: 5px;
            color: white;
            padding: 4px 8px;
            cursor: pointer;
        }

        :focus-visible {
            outline: 2px dashed #3792c8;
            outline-offset: 2px;
        }

        .bold {
            font-weight: 600;
        }

        :disabled {
            cursor: auto;
        }
    `;

    @property()
    variant: 'Primary' | 'Secondary' = 'Primary';

    @property()
    label = '';

    @property()
    size: 'small' | 'medium' | 'large' = 'medium';

    render() {
        const classes = classMap({
            "sashimi-button__root": true,
            "sashimi-button__root_primary": this.variant === 'Primary',
            "sashimi-button__root_secondary": this.variant === 'Secondary',
        });

        return html`
            <button class="${classes}">
                ${this.label}
            </button>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "sashimi-button": Button;
    }
}

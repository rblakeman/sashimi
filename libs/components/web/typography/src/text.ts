import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('sashimi-text')
export class Text extends LitElement {
    static styles = css`
        :host {
            display: inline-block;
        }

        .bold {
            font-weight: 600;
        }
    `;

    @property({ type: Boolean })
    bold = false;

    render() {
        const classes = classMap({
            "sashimi-text__root": true,
            "sashimi-text__root_bold": this.bold
        });

        return html`
            <p class="${classes}" part="root">
                <slot></slot>
            </p>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "sashimi-text": Text;
    }
}

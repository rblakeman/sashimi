import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

@customElement('sashimi-heading')
export class Heading extends LitElement {
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
            "sashimi-heading__root": true,
            "sashimi-heading__root_bold": this.bold
        });

        return html`
            <h1 class="${classes}" part="root">
                <slot></slot>
            </h1>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "sashimi-heading": Heading;
    }
}

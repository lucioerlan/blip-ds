import { Component, Host, State, h } from '@stencil/core';
import messageBallon from '../../assets/svg/message-ballon.svg';

@Component({
  tag: 'bds-loading-page',
  styleUrl: 'loading-page.scss',
  shadow: true,
})
export class BdsLoading {
  @State() private svgContent?: string;

  componentWillLoad() {
    this.setSvgContent();
  }

  /**Function to transform the svg in a div element. */
  formatSvg = (svgContent: string) => {
    const div = document.createElement('div');
    div.innerHTML = svgContent;
    const svgElm = div.firstElementChild;

    svgElm.removeAttribute('width');
    svgElm.removeAttribute('height');
    return div.innerHTML;
  };

  setSvgContent = () => {
    const innerHTML = messageBallon;

    const svg = atob(innerHTML.replace('data:image/svg+xml;base64,', ''));
    this.svgContent = this.formatSvg(svg);
  };

  render() {
    return (
      <Host>
        <div class="loading-container">
          <div class={{ page_loading: true }} innerHTML={this.svgContent}></div>
        </div>
      </Host>
    );
  }
}

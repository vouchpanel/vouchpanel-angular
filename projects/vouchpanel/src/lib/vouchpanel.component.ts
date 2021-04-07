import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-vouchpanel',
  template: ` <div className="vouchpanel-publish" data-wall="{{" id }}></div> `,
  styles: [],
})
export class VouchpanelComponent implements OnInit {
  @Input() id: number;

  constructor(id: number) {
    this.id = id;
  }

  loadScript() {
    let node = document.createElement('script'); // creates the script tag
    node.src = 'https://app.vouchpanel.com/js/embed.js'; // sets the source (insert url in between quotes)
    node.type = 'text/javascript'; // set the script type
    node.async = true; // makes script run asynchronously
    // append to head of document
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  ngOnInit(): void {
    this.loadScript();
  }
}

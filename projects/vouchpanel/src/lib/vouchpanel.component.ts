import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vouchpanel',
  template: `<div class="vouchpanel-publish" [attr.dark-mode]="darkMode" [attr.data-wall]="id"></div>`,
  styles: [],
})
export class VouchpanelComponent implements OnInit {
  @Input() id!: string;
  @Input() darkMode!: "on" | "off";

  constructor() {

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

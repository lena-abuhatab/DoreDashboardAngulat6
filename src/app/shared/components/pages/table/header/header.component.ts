import { Columns } from "./../../../../modules/columns";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "table-header",
  template: `
  <div class="dx-editor-with-menu">

<div class="dx-editor-container">
  <div class="dx-numberbox dx-texteditor dx-editor-outlined dx-widget dx-texteditor-empty">
    <div class="dx-texteditor-container">
        <input type="text"
       id="search_{{ unifyKey(column.key) }}"
       aria-label="Search"
       class="dx-texteditor-input"
       #input
       (input)="update.emit({value: input.value, key: column.key})"
>
      <i class="iconsmind-Search-onCloud"></i>
      <div class="dx-texteditor-buttons-container"></div>
    </div>
  </div>
</div>
</div>
    `,
  styles: [
    "i.iconsmind-Search-onCloud {position: absolute;display: block;top: 9px;left: 8px;font-size: 17px; }"
  ]
})
// <input autocomplete="off" class="dx-texteditor-input" type="text" spellcheck="false" min="undefined" max="undefined" step="1"
// aria-valuemin="undefined" aria-valuemax="undefined" tabindex="0" role="spinbutton">
export class TableHeaderComponent {
  @Input()
  column: Columns;
  @Output()
  update = new EventEmitter();

  unifyKey(key: string): string {
    return key.replace(".", "_");
  }
}

import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  ShortcutInput,
  ShortcutEventOutput,
  KeyboardShortcutsComponent,
  AllowIn,
} from 'ng-keyboard-shortcuts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  shortcuts: ShortcutInput[] = [];

  ngAfterViewInit(): void {
    this.shortcuts.push(
      {
        key: 'ctrl + t',
        preventDefault: true,
        allowIn: [AllowIn.Textarea, AllowIn.Input],
        command: (e) => console.log('clicked ', e.key),
      },
      {
        key: ['? a'],
        label: 'Sequences',
        description: 'Sequence ? and a',
        command: (output: ShortcutEventOutput) => console.log('? a', output),
        preventDefault: true,
      }
    );
  }
}

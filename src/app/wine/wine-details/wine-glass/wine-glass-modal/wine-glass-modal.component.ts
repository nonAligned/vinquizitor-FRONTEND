import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { Glass } from 'src/app/models/glass.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'wine-wine-glass-modal',
  templateUrl: './wine-glass-modal.component.html',
  styleUrls: ['./wine-glass-modal.component.scss']
})
export class WineGlassModalComponent {
  @Input() glass?: Glass;
  @Output() modalClose: EventEmitter<string> = new EventEmitter();
  exitButton = faX;
  api = environment.apiKey;

  closeModal(): void {
    this.modalClose.emit("close");
  }
}

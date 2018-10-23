import { Component, Input } from '@angular/core';

@Component({
    templateUrl: 'ad-block.component.html',
    selector: 'ad-block'
})

export class AdBlockComponent {
    @Input() adClient: string;
    @Input() adSlot: string;
    @Input() adWidth: number;
    @Input() adHeight: number;
};
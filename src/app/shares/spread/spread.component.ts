import { ChangeDetectorRef, Component, ElementRef, forwardRef, Inject, Injector, Input, OnInit, Optional, SkipSelf } from '@angular/core';
import { CollectionView } from '@grapecity/wijmo';
import { WjFlexGrid, wjFlexGridMeta } from '@grapecity/wijmo.angular2.grid';
import { AllowResizing, AutoSizeMode } from '@grapecity/wijmo.grid';

@Component({
  selector: 'app-spread',
  templateUrl: './spread.component.html',
  styleUrls: ['./spread.component.scss'],
  providers: [
    {provide: 'WjComponent', useExisting: forwardRef(() => SpreadComponent)},
    ...wjFlexGridMeta.providers
  ],
})
export class SpreadComponent extends WjFlexGrid implements OnInit {

  constructor(@Inject(ElementRef) elRef: ElementRef,
              @Inject(Injector) injector: Injector,
              @Inject('WjComponent') @SkipSelf() @Optional() parentCmp: any,
              @Inject(ChangeDetectorRef) cdRef: ChangeDetectorRef) {
    super(elRef, injector, parentCmp, cdRef);
  }

  @Input()
  set items(value: any[]) {
    this.itemsSource = new CollectionView(value);
  }

  ngOnInit(): void {
  }

  created(): void {
    this.allowResizing = AllowResizing.Both;
    this.deferResizing = true;
    this.cloneFrozenCells = false;
    this.allowAddNew = false;
    this.alternatingRowStep = 1;
    this.autoSizeMode = AutoSizeMode.Both;
    this.validateEdits = false;
    this.showErrors = true;
  }
}

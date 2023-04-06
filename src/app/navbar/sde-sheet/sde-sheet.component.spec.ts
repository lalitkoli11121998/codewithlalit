import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdeSheetComponent } from './sde-sheet.component';

describe('SdeSheetComponent', () => {
  let component: SdeSheetComponent;
  let fixture: ComponentFixture<SdeSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdeSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SdeSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

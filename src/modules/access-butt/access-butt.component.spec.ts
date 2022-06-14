import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessButtComponent } from './access-butt.component';

describe('AccessButtComponent', () => {
  let component: AccessButtComponent;
  let fixture: ComponentFixture<AccessButtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessButtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessButtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

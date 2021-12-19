import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsinfoComponent } from './newsinfo.component';

describe('NewsinfoComponent', () => {
  let component: NewsinfoComponent;
  let fixture: ComponentFixture<NewsinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

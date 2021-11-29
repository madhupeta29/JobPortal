import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmDashoabrdComponent } from './em-dashoabrd.component';

describe('EmDashoabrdComponent', () => {
  let component: EmDashoabrdComponent;
  let fixture: ComponentFixture<EmDashoabrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmDashoabrdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmDashoabrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

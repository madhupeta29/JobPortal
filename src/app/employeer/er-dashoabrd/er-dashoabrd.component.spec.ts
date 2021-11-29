import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErDashoabrdComponent } from './er-dashoabrd.component';

describe('ErDashoabrdComponent', () => {
  let component: ErDashoabrdComponent;
  let fixture: ComponentFixture<ErDashoabrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErDashoabrdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErDashoabrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

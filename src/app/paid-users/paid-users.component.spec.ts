import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidUsersComponent } from './paid-users.component';

describe('PaidUsersComponent', () => {
  let component: PaidUsersComponent;
  let fixture: ComponentFixture<PaidUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

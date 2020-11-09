import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCustomTableComponent } from './user-custom-table.component';

describe('UserCustomTableComponent', () => {
  let component: UserCustomTableComponent;
  let fixture: ComponentFixture<UserCustomTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCustomTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCustomTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

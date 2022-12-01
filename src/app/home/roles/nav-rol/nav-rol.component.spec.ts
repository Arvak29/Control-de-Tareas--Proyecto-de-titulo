import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRolComponent } from './nav-rol.component';

describe('NavRolComponent', () => {
  let component: NavRolComponent;
  let fixture: ComponentFixture<NavRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavRolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

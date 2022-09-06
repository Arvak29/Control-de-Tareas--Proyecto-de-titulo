import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTareaComponent } from './nav-tarea.component';

describe('NavTareaComponent', () => {
  let component: NavTareaComponent;
  let fixture: ComponentFixture<NavTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavTareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

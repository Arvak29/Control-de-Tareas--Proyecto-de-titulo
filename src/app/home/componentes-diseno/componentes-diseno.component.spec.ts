import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesDisenoComponent } from './componentes-diseno.component';

describe('ComponentesDisenoComponent', () => {
  let component: ComponentesDisenoComponent;
  let fixture: ComponentFixture<ComponentesDisenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentesDisenoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentesDisenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

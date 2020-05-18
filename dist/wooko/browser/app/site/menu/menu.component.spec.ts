import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDishComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuDishComponent;
  let fixture: ComponentFixture<MenuDishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

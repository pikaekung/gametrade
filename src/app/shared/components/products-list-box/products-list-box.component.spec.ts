import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListBoxComponent } from './products-list-box.component';

describe('ProductsListBoxComponent', () => {
  let component: ProductsListBoxComponent;
  let fixture: ComponentFixture<ProductsListBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsListBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsListBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

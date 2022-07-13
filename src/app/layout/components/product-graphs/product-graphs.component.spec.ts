import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGraphsComponent } from './product-graphs.component';

describe('ProductGraphsComponent', () => {
  let component: ProductGraphsComponent;
  let fixture: ComponentFixture<ProductGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGraphsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhacalculadoraComponent } from './minhacalculadora.component';

describe('MinhacalculadoraComponent', () => {
  let component: MinhacalculadoraComponent;
  let fixture: ComponentFixture<MinhacalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinhacalculadoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhacalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

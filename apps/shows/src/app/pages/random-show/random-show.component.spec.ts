import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomShowComponent } from './random-show.component';

describe('RandomShowComponent', () => {
  let component: RandomShowComponent;
  let fixture: ComponentFixture<RandomShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomShowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RandomShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

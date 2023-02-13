import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditchildComponent } from './editchild.component';

describe('EditchildComponent', () => {
  let component: EditchildComponent;
  let fixture: ComponentFixture<EditchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

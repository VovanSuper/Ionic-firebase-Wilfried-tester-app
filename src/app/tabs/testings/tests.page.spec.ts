import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { TestsPage } from './tests.page';

describe('TestsPage', () => {
  let component: TestsPage;
  let fixture: ComponentFixture<TestsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestsPage],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

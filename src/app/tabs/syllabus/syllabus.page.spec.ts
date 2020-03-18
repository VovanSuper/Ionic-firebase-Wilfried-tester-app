import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SyllabusPage } from './syllabus.page';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SyllabusPage', () => {
  let component: SyllabusPage;
  let fixture: ComponentFixture<SyllabusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SyllabusPage],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SyllabusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

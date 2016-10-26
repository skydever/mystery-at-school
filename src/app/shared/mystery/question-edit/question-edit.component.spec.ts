/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Question } from '../../data-structures/question';
import { QuestionEditComponent } from './question-edit.component';
import { SharedModule } from '../../shared.module';

describe('QuestionEditComponent', () => {
  let component: QuestionEditComponent;
  let fixture: ComponentFixture<QuestionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionEditComponent);
    component = fixture.componentInstance;
    component.question = new Question();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

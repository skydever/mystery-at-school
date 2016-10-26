/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Mystery } from '../../data-structures/mystery';
import { MysteryEditComponent } from './mystery-edit.component';
import { SharedModule } from '../../shared.module';

describe('MysteryEditComponent', () => {
  let component: MysteryEditComponent;
  let fixture: ComponentFixture<MysteryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysteryEditComponent);
    component = fixture.componentInstance;
    component.mystery = new Mystery();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

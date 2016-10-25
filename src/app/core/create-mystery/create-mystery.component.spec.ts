/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoreModule } from '../../core/core.module';
import { CreateMysteryComponent } from './create-mystery.component';
import { SharedModule } from '../../shared/shared.module';

describe('CreateMysteryComponent', () => {
  let component: CreateMysteryComponent;
  let fixture: ComponentFixture<CreateMysteryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        CoreModule
      ],
      declarations: [ CreateMysteryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMysteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

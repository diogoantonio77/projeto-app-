import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddDiarioBordoPage } from './add-diario-bordo.page';

describe('AddDiarioBordoPage', () => {
  let component: AddDiarioBordoPage;
  let fixture: ComponentFixture<AddDiarioBordoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDiarioBordoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddDiarioBordoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

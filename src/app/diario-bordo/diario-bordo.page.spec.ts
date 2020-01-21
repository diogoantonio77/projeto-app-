import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiarioBordoPage } from './diario-bordo.page';

describe('DiarioBordoPage', () => {
  let component: DiarioBordoPage;
  let fixture: ComponentFixture<DiarioBordoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiarioBordoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiarioBordoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

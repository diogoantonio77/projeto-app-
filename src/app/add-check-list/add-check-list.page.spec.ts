import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddCheckListPage } from './add-check-list.page';

describe('AddCheckListPage', () => {
  let component: AddCheckListPage;
  let fixture: ComponentFixture<AddCheckListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCheckListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCheckListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

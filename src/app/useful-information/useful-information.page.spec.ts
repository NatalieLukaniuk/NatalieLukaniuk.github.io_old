import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsefulInformationPage } from './useful-information.page';

describe('UsefulInformationPage', () => {
  let component: UsefulInformationPage;
  let fixture: ComponentFixture<UsefulInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsefulInformationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsefulInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

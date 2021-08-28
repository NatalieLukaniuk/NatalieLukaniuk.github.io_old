import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApisPage } from './apis.page';

describe('ApisPage', () => {
  let component: ApisPage;
  let fixture: ComponentFixture<ApisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

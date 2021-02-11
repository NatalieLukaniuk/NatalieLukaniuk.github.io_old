import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RemAppPage } from './rem-app.page';

describe('RemAppPage', () => {
  let component: RemAppPage;
  let fixture: ComponentFixture<RemAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemAppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RemAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

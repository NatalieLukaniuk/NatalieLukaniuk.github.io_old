import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GigitalUiPage } from './gigital-ui.page';

describe('GigitalUiPage', () => {
  let component: GigitalUiPage;
  let fixture: ComponentFixture<GigitalUiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GigitalUiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GigitalUiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

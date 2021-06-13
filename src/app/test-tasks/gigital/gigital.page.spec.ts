import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GigitalPage } from './gigital.page';

describe('GigitalPage', () => {
  let component: GigitalPage;
  let fixture: ComponentFixture<GigitalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GigitalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GigitalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

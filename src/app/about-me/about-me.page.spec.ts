import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutMePage } from './about-me.page';

describe('AboutMePage', () => {
  let component: AboutMePage;
  let fixture: ComponentFixture<AboutMePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutMePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

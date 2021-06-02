import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Parallax3Page } from './parallax3.page';

describe('Parallax3Page', () => {
  let component: Parallax3Page;
  let fixture: ComponentFixture<Parallax3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parallax3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Parallax3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

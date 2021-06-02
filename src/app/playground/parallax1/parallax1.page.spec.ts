import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Parallax1Page } from './parallax1.page';

describe('Parallax1Page', () => {
  let component: Parallax1Page;
  let fixture: ComponentFixture<Parallax1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parallax1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Parallax1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

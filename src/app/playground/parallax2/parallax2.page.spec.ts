import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Parallax2Page } from './parallax2.page';

describe('Parallax2Page', () => {
  let component: Parallax2Page;
  let fixture: ComponentFixture<Parallax2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parallax2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Parallax2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

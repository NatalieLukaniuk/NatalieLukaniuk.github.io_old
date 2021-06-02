import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Parallax4Page } from './parallax4.page';

describe('Parallax4Page', () => {
  let component: Parallax4Page;
  let fixture: ComponentFixture<Parallax4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parallax4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Parallax4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

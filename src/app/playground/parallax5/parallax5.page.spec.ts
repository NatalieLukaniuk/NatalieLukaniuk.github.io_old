import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Parallax5Page } from './parallax5.page';

describe('Parallax5Page', () => {
  let component: Parallax5Page;
  let fixture: ComponentFixture<Parallax5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parallax5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Parallax5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

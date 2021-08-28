import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PipesPage } from './pipes.page';

describe('PipesPage', () => {
  let component: PipesPage;
  let fixture: ComponentFixture<PipesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

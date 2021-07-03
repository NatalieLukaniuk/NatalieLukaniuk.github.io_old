import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToDoAppPage } from './to-do-app.page';

describe('ToDoAppPage', () => {
  let component: ToDoAppPage;
  let fixture: ComponentFixture<ToDoAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoAppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToDoAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

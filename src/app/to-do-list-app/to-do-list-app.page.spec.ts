import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToDoListAppPage } from './to-do-list-app.page';

describe('ToDoListAppPage', () => {
  let component: ToDoListAppPage;
  let fixture: ComponentFixture<ToDoListAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoListAppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToDoListAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

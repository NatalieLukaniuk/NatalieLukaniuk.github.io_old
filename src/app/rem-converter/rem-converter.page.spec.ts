import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RemConverterPage } from './rem-converter.page';

describe('RemConverterPage', () => {
  let component: RemConverterPage;
  let fixture: ComponentFixture<RemConverterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemConverterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RemConverterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

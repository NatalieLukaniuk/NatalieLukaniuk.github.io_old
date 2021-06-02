import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RemConverterComponent } from './rem-converter.component';

describe('RemConverterComponent', () => {
  let component: RemConverterComponent;
  let fixture: ComponentFixture<RemConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemConverterComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RemConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

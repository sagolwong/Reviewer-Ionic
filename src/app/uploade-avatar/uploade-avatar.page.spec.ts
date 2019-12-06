import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadeAvatarPage } from './uploade-avatar.page';

describe('UploadeAvatarPage', () => {
  let component: UploadeAvatarPage;
  let fixture: ComponentFixture<UploadeAvatarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadeAvatarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadeAvatarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

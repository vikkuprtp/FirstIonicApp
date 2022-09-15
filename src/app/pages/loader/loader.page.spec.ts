import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { LoaderPage } from './loader.page';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router:Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderPage ],
      imports: [IonicModule.forRoot(),
      AppRoutingModule,],//added AppRoutingModule for router 
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderPage);
    component = fixture.componentInstance;
    router=TestBed.get(Router);//instance of a service of component
    fixture.detectChanges();
  }));

  it('should go to login page after laod', fakeAsync(() => {
    spyOn(router,'navigate');
    component.ngOnInit();
    tick(1500);
    expect(router.navigate).toHaveBeenCalledWith(['login'])
  }));
});

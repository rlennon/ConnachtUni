import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('has to return the sum of two numbers', () => {
    const fixture = TestBed.createComponent(AppComponent);
    
    expect(fixture.componentInstance.getSomeValue(110,1)).toEqual(111);
  });
  
  it('should render the Hello World! string', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('Hello World!');
  });
});

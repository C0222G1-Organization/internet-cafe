import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './common-component/header/header.component';
import {FooterComponent} from './common-component/footer/footer.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {NgxPaginationModule} from 'ngx-pagination';
import {NotAuthorizedComponent} from './common-component/not-authorized/not-authorized.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {PaymentModule} from './payment/payment.module';
import {AuthenticationModule} from './authentication/authentication.module';
import {CustomerModule} from './customer/customer.module';
import {EmployeeModule} from './employee/employee.module';
import {GameModule} from './game/game.module';
import {NewsModule} from './news/news.module';
import {ComputerModule} from './computer/computer.module';
import {ProductModule} from './product/product.module';
import {RegistrationModule} from './registration/registration.module';
import {HomePageModule} from './home-page/home-page.module';
import {StatisticModule} from './statistic/statistic.module';
import {JwtInterceptor} from './authentication/service/jwt.interceptor';
import { ServerErrorComponent } from './common-component/server-error/server-error.component';
import { NotFoundComponent } from './common-component/not-found/not-found.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import { RemainingTimeComponent } from './common-component/remaining-time/remaining-time.component';
import { AboutUsComponent } from './common-component/footer/about-us/about-us.component';
import { LinkComponent } from './common-component/footer/link/link.component';
import { JobsComponent } from './common-component/footer/jobs/jobs.component';
import { LicenseComponent } from './common-component/footer/license/license.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotAuthorizedComponent,
    ServerErrorComponent,
    NotFoundComponent,
    RemainingTimeComponent,
    AboutUsComponent,
    LinkComponent,
    JobsComponent,
    LicenseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      closeButton: true,
      positionClass: 'toast-top-center',
    }),
    PaymentModule,
    AuthenticationModule,
    CustomerModule,
    EmployeeModule,
    GameModule,
    NewsModule,
    ComputerModule,
    ProductModule,
    RegistrationModule,
    HomePageModule,
    StatisticModule,
    CKEditorModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
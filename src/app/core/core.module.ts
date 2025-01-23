import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { SharedModule } from '../shared/shared.module';
import { DefaultModule } from '../default/default.module';
import { SecurityModule } from '../security/security.module';
import { UserAccountModule } from '../user-account/user-account.module';
import { UserModule } from '../user/user.module';
import { PublishModule } from '../publish/publish.module';
import { ApoioService } from './apoio.service';
import { environment } from '../../environments/environment.prod';

registerLocaleData(localePt);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,

    SharedModule,
    DefaultModule,
    SecurityModule,
    UserModule,
    UserAccountModule,
    PublishModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    ApoioService
  ],
  exports: [
    SharedModule,
    DefaultModule,
    SecurityModule,
    UserModule,
    UserAccountModule,
    PublishModule,]
})
export class CoreModule { }

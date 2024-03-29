import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutMeComponent } from './about-me/about-me.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ExperienceComponent } from './experience/experience.component';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { SoftSkillsComponent } from './soft-skills/soft-skills.component';
import { StackComponent } from './stack/stack.component';
import { ToolsComponent } from './tools/tools.component';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [	
    AppComponent,
    AboutMeComponent,
    ExperienceComponent,
    StackComponent,
    ToolsComponent,
    SoftSkillsComponent,
    ContactsComponent,
      HelloComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

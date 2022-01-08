import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ExperienceComponent } from './experience/experience.component';
import { SoftSkillsComponent } from './soft-skills/soft-skills.component';
import { StackComponent } from './stack/stack.component';
import { ToolsComponent } from './tools/tools.component';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutMeComponent, pathMatch: 'full' },
  { path: 'experience', component: ExperienceComponent, pathMatch: 'full' },
  { path: 'stack', component: StackComponent, pathMatch: 'full' },
  { path: 'tools', component: ToolsComponent, pathMatch: 'full' },
  { path: 'softSkills', component: SoftSkillsComponent, pathMatch: 'full' },
  { path: 'contacts', component: ContactsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

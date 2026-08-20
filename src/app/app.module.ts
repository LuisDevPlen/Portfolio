import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
import { ScrollTopModule } from 'primeng/scrolltop';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';
import { AccordionModule } from 'primeng/accordion';
import { MessageModule } from 'primeng/message';

import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { SkillsSectionComponent } from './sections/skills-section/skills-section.component';
import { CompaniesSectionComponent } from './sections/companies-section/companies-section.component';
import { ExperienceSectionComponent } from './sections/experience-section/experience-section.component';
import { EducationSectionComponent } from './sections/education-section/education-section.component';
import { ContactSectionComponent } from './sections/contact-section/contact-section.component';
import { ProjectsSectionComponent } from './sections/projects-section/projects-section.component';
import { RevealOnScrollDirective } from './directives/reveal-on-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    CompaniesSectionComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    ContactSectionComponent,
    ProjectsSectionComponent,
    RevealOnScrollDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    TagModule,
    ChipModule,
    DividerModule,
    PanelModule,
    AvatarModule,
    RippleModule,
    ScrollTopModule,
    InputTextModule,
    SidebarModule,
    TooltipModule,
    AccordionModule,
    MessageModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

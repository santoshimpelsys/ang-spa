import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AiTrendsComponent } from './ai-trends/ai-trends.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';
import { ContactAddressComponent } from './contactus/contact-address/contact-address.component';
import { ContactFormComponent } from './contactus/contact-form/contact-form.component';
import { ContactGmapComponent } from './contactus/contact-gmap/contact-gmap.component';
import { MachineLearningComponent } from './ai-trends/machine-learning/machine-learning.component';
import { DeepLearningComponent } from './ai-trends/deep-learning/deep-learning.component';
import { GenAiComponent } from './ai-trends/gen-ai/gen-ai.component';
import { ChatGptComponent } from './ai-trends/gen-ai/chat-gpt/chat-gpt.component';
import { CopilotComponent } from './ai-trends/gen-ai/copilot/copilot.component';
import { MidJourneyComponent } from './ai-trends/gen-ai/mid-journey/mid-journey.component';
import { GeminiComponent } from './ai-trends/gen-ai/gemini/gemini.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    AiTrendsComponent,
    RegistrationComponent,
    ContactusComponent,
    SignupComponent,
    ContactAddressComponent,
    ContactFormComponent,
    ContactGmapComponent,
    MachineLearningComponent,
    DeepLearningComponent,
    GenAiComponent,
    ChatGptComponent,
    CopilotComponent,
    MidJourneyComponent,
    GeminiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

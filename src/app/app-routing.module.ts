import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MachineLearningComponent } from './ai-trends/machine-learning/machine-learning.component';
import { DeepLearningComponent } from './ai-trends/deep-learning/deep-learning.component';
import { ChatGptComponent } from './ai-trends/gen-ai/chat-gpt/chat-gpt.component';
import { CopilotComponent } from './ai-trends/gen-ai/copilot/copilot.component';
import { MidJourneyComponent } from './ai-trends/gen-ai/mid-journey/mid-journey.component';
import { GeminiComponent } from './ai-trends/gen-ai/gemini/gemini.component';
import { RegistrationComponent } from './registration/registration.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ai-trends/machine-learning', component: MachineLearningComponent },
  { path: 'ai-trends/deep-learning', component: DeepLearningComponent },
  { path: 'ai-trends/chat-gpt', component: ChatGptComponent },
  { path: 'ai-trends/copilot', component: CopilotComponent },
  { path: 'ai-trends/mid-journey', component: MidJourneyComponent },
  { path: 'ai-trends/gemini', component: GeminiComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'contact-us', component: ContactusComponent },
  { path: 'sign-up', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AudioRecordingService } from "./audio-recording.service";
import { NgxAudioPlayerModule } from "ngx-audio-player";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxAudioPlayerModule],
  providers: [AudioRecordingService],
  bootstrap: [AppComponent]
})
export class AppModule {}

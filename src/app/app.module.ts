import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AudioRecordingService } from "./audio-recording.service";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [AudioRecordingService],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Component, OnInit, NgModule, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'; // used for reactive forms
import { DialogflowService } from '../../services/dialogflow.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {

  @Input('message')
  private message: Message;

  @Input('messages')
  private messages: Message[];

  constructor(private dialogFlowService: DialogflowService) { }

  ngOnInit() {
  }

  public sendMessage(): void {
    this.messages.push(this.message);

    this.dialogFlowService.getResponse(this.message.content).subscribe(res => {
      this.messages.push(this.message);
    });
}
}


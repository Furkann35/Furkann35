import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { ChatUser, ChatMessage } from './chat.model';

import { chatData, chatMessagesData } from './data';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
/**
 * Chat component
 */
export class ChatComponent implements OnInit {

  chatMessagesData: ChatMessage[];
  chatData: ChatUser[];

  formData: FormGroup;

  // Form submit
  chatSubmit: boolean;

  username: string;
  usermessage: string;
  status: string;
  image: string;

  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor(public formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Nazox' }, { label: 'Chat', active: true }];

    this.formData = this.formBuilder.group({
      message: ['', [Validators.required]],
    });

    this._fethchData();
    this.username = 'Frank Vickery';
    this.status = 'online';
  }

  private _fethchData() {
    this.chatData = chatData;
    this.chatMessagesData = chatMessagesData;
  }


  chatUsername(name, image, status) {
    this.username = name;
    this.image = image;
    this.usermessage = 'Hello';
    this.chatMessagesData = [];
    const currentDate = new Date();
    this.status = status;

    this.chatMessagesData.push({
      image: this.image,
      name: this.username,
      message: this.usermessage,
      time: currentDate.getHours() + ':' + currentDate.getMinutes(),
      status: this.status
    });
  }

  /**
   * Returns form
   */
  get form() {
    return this.formData.controls;
  }

  /**
   * Save the message in chat
   */
  messageSave() {
    const message = this.formData.get('message').value;
    const currentDate = new Date();
    if (this.formData.valid && message) {
      // Message Push in Chat
      this.chatMessagesData.push({
        align: 'right',
        name: 'Ricky Clark',
        message,
        time: currentDate.getHours() + ':' + currentDate.getMinutes()
      });

      // Set Form Data Reset
      this.formData = this.formBuilder.group({
        message: null
      });
    }

    this.chatSubmit = true;
  }
}

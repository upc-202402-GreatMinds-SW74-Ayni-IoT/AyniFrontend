import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root',
})
export class EmailJsService {
  constructor() {
    emailjs.init('2AQqFJtK_SOsDytib');
  }

  async sendInvitation(data: any): Promise<void> {
    try {
      await emailjs.send('service_dnfa9lc', 'template_bw611wv', data);
    } catch (e: any) {
      throw new Error('Error sending email: ' + e.message);
    }
  }
}

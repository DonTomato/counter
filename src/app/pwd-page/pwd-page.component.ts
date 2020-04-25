import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pwd-page',
  templateUrl: './pwd-page.component.html',
  styleUrls: ['./pwd-page.component.scss']
})
export class PwdPageComponent {

  password: string;

  generatePassword(): void {
    const a: any[] = [0, 1, 2];
    a.forEach((_, i) => a[i] = Math.random().toString(36).slice(5, 10));
    this.password = `${a[0]}-${a[1]}-${a[2]}`;
    this.copyToClipboard(this.password);
  }

  copyToClipboard(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}

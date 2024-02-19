/* ••[1]••••••••••••••••••••••••• sanitize-html.pipe.ts •••••••••••••••••••••••••••••• */

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sanitizeHtml',
})
export class SanitizeHtmlPipe implements PipeTransform {
  public constructor(private readonly domSanitizer: DomSanitizer) {}

  public transform(value: string): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(value);
  }
}

import { Injectable } from '@angular/core';

export interface IconFiles {
  imageFile: string;
  alt: string;
  link: string;
}

export interface FrameworkConfigSettings {
  socialIcons?: Array<IconFiles>;
  showLanguageSelector?: boolean;
  showUserControls?: boolean;
  showStatusBar?: boolean;
  showStatusBarBreakpoint?: number;
  companyName?: string;
  showCopyright?: boolean;
  copyrightSince?: string;
}

 @Injectable()
export class FrameworkConfigService {
  showLanguageSelector = true;
  showUserControls = true;
  showStatusBar= true;
  showStatusBarBreakppoint = 0;
  socialIcons= new Array<IconFiles>();
  companyName?: string;
  showCopyright?: boolean;
  copyrightSince?: string;

  configure(settings: FrameworkConfigSettings) : void {
    Object.assign(this, settings)
  }
  
}

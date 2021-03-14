import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

export const components = [];

export const directives = [];

export const entryComponents = [];

@NgModule({
  providers: [],
  declarations: [...components, ...entryComponents, ...directives],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [CommonModule, ...components, ...entryComponents, ...directives],
  entryComponents
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        ...components,
        ...entryComponents,
        ...directives
      ]
    };
  }
}

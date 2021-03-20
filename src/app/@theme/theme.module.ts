import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Banner
import { BannerComponent } from 'src/app/@theme/components/banner/banner/banner.component';
import { MainBannerComponent } from 'src/app/@theme/components/banner/main-banner/main-banner.component';

// Column
import { SingleColumnComponent } from 'src/app/@theme/layouts/column/single-column/single-column.component';
import { DualColumnComponent } from 'src/app/@theme/layouts/column/dual-column/dual-column.component';
import { TripleColumnComponent } from 'src/app/@theme/layouts/column/triple-column/triple-column.component';
import { QualColumnComponent } from 'src/app/@theme/layouts/column/qual-column/qual-column.component';

// Grid
import { QuadGridComponent } from 'src/app/@theme/layouts/grid/quad-grid/quad-grid.component';
import { HexGridComponent } from 'src/app/@theme/layouts/grid/hex-grid/hex-grid.component';

export const components = [
  BannerComponent,
  MainBannerComponent,

  SingleColumnComponent,
  DualColumnComponent,
  TripleColumnComponent,
  QualColumnComponent,

  QuadGridComponent,
  HexGridComponent
];

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

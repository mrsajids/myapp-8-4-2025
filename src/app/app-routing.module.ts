import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./layout/layout.module").then((m) => m.LayoutModule),
      },
      { path: "**", redirectTo: "dashboard" },
    ],

    // canActivate : [AuthGuard]  ,
    // canDeactivate : [RouterGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SimpleDemoComponent } from "./simple-demo/simple-demo.component";
import { AdvancedDemoComponent } from "./advanced-demo/advanced-demo.component";
import { EditModeComponent } from "./edit-mode/edit-mode.component";
const routes: Routes = [
  { path: "", redirectTo: "simple", pathMatch: "full" },
  { path: "simple", component: SimpleDemoComponent },
  { path: "advanced", component: AdvancedDemoComponent },
  { path: "edit-mode", component: EditModeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

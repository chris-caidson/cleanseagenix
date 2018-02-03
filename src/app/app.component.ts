import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "HomePage";

  pages: Array<{ title: string; component: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    this.pages = [
      { title: "Home", component: "HomePage" },
      { title: "Why Isagenix?", component: "WhyIsagenixPage" },
      { title: "Isacommunity", component: "IsaCommunityPage" },
      { title: "Become an Associate", component: "BecomeAnAssociatePage" },
      { title: "Success Stories", component: "SuccessStoriesPage" },
      { title: "About Us", component: "AboutUsPage" },
      { title: "Company", component: "CompanyPage" },
      { title: "Blog", component: "BlogPage" }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(pageName) {
    this.nav.setRoot(pageName);
  }
}

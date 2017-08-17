import {Component} from '@angular/core';

import {InfoPage} from '../info/info';
import {HelpPage} from "../help/help";
import {OverviewPage} from '../overview/overview';
import {CodescannerPage} from "../codescanner/codescanner";
import {TourPage} from "../tour/tour";
import {AustralianConvictSitesPage} from "../australian-convict-sites/australian-convict-sites";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  starter = AustralianConvictSitesPage;
  tourRoot = TourPage;
  tab1Root = HelpPage;
  tab2Root = InfoPage;
  tab3Root = OverviewPage;
  tab4Root = CodescannerPage;

  constructor() {

  }
}

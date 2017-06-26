import {Component} from '@angular/core';

import {MapPage} from '../map/map';
import {InfoPage} from '../info/info';
import {OverviewPage} from '../overview/overview';
import {CodescannerPage} from "../codescanner/codescanner";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MapPage;
  tab2Root = InfoPage;
  tab3Root = OverviewPage;
  tab4Root = CodescannerPage;

  constructor() {

  }
}

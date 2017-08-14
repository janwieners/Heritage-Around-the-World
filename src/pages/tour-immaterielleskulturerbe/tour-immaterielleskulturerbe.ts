import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {AustralianConvictSitesPage} from "../australian-convict-sites/australian-convict-sites";
import {NaraKasugaTaishaPage} from "../nara-kasuga-taisha/nara-kasuga-taisha";
import {KyotoKinkakuJiPage} from "../kyoto-kinkaku-ji/kyoto-kinkaku-ji";
import {HagiPage} from "../hagi/hagi";
import {HashimaTakashimaPage} from "../hashima-takashima/hashima-takashima";
import {NagasakiPage} from "../nagasaki/nagasaki";
import {BaliPage} from "../bali/bali";
import {MalakkaPage} from "../malakka/malakka";
import {HoiAnPage} from "../hoi-an/hoi-an";
import {KathmanduPage} from "../kathmandu/kathmandu";
import {HampiElefantPage} from "../hampi-elefant/hampi-elefant";
import {HampiLivingHeritagePage} from "../hampi-living-heritage/hampi-living-heritage";
import {MumbaiPage} from "../mumbai/mumbai";
import {TeheranPage} from "../teheran/teheran";
import {PalmyraPage} from "../palmyra/palmyra";
import {JordanienBedulPage} from "../jordanien-bedul/jordanien-bedul";
import {LalibelaPage} from "../lalibela/lalibela";
import {LuxorPage} from "../luxor/luxor";
import {KilimanjaroNationalparkPage} from "../kilimanjaro-nationalpark/kilimanjaro-nationalpark";
import {MalotiDrakensangNationalparkPage} from "../maloti-drakensang-nationalpark/maloti-drakensang-nationalpark";
import {RobbenIslandPage} from "../robben-island/robben-island";
import {IleDeGoreePage} from "../ile-de-goree/ile-de-goree";
import {LiverpoolPage} from "../liverpool/liverpool";
import {LaQuebradaDeHumahuacaPage} from "../la-quebrada-de-humahuaca/la-quebrada-de-humahuaca";
import {MooretownPage} from "../mooretown/mooretown";
import {LaAmistadNationalparkPage} from "../la-amistad-nationalpark/la-amistad-nationalpark";
import {LosVoladoresPage} from "../los-voladores/los-voladores";

@Component({
  selector: 'page-tour-immaterielleskulturerbe',
  templateUrl: 'tour-immaterielleskulturerbe.html',
})
export class TourImmaterielleskulturerbePage {

  private pages = [AustralianConvictSitesPage,
    NaraKasugaTaishaPage,
    KyotoKinkakuJiPage,
    HagiPage,
    HashimaTakashimaPage,
    NagasakiPage,
    BaliPage,
    MalakkaPage,
    HoiAnPage,
    KathmanduPage,
    HampiElefantPage,
    HampiLivingHeritagePage,
    MumbaiPage,
    TeheranPage,
    PalmyraPage,
    JordanienBedulPage,
    LalibelaPage,
    LuxorPage,
    KilimanjaroNationalparkPage,
    MalotiDrakensangNationalparkPage,
    RobbenIslandPage,
    IleDeGoreePage,
    LiverpoolPage,
    LaQuebradaDeHumahuacaPage,
    MooretownPage,
    LaAmistadNationalparkPage,
    LosVoladoresPage];

  openPage(pagenumber:number) {
    this.navCtrl.push(this.pages[pagenumber]);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}

import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuDishComponent implements OnInit {
  currentSection = '';


  menu: any[] = [{
    category: "Polecane przez Szefa Kuchni",
    desc: "",
    id_class: "polecane",
    img: "",
    dish: [{
      description: "z makaronem ryżowym - cebula, kiełki mun, czosnek, grzyby mun, sos rybny",
      number: 1,
      name: "Pad Thai z kurczakiem",
      price: [
        { size: "L", price: "10" },
        { size: "XL", price: "26" }
      ],
      img: "assets/images/dish/zupa_rosol_z_kurczakiem.png"
    }]
  },
  {
    category: "Zupy",
    desc: "",
    id_class: "zupy",
    img: "assets/images/bg/krewetki_w_ciescie.jpg",
    dish: [{
      description: "serwowane z makaronem sojowym i warzywami 480ml",
      number: 1,
      name: "Delikatny rosół z kurczakiem",
      price: [
        { price: "10" }
      ],
      img: "assets/images/dish/zupa_rosol_z_kurczakiem.png"
    },
    {
      description: "serwowane z makaronem sojowym i warzywami 480ml",
      name: "Zupa na ostro z kurczakiem i mlekiem kokosowym",
      number: 2,
      price: [
        { price: "15" }
      ],
      img: "assets/images/dish/zupa_ostro_z_kurczakiem_m_k.png"
    },
    {
      description: "serwowane z makaronem sojowym i warzywami 480ml",
      name: "Zupa na ostro z krewetkami 3szt. i mlekiem kokosowym",
      number: 3,
      price: [
        { price: "16" }
      ],
      img: "assets/images/dish/zupa_ostro_z_krewetkami_m_k.png"
    },
    {
      description: "serwowane z makaronem sojowym i warzywami 480ml",
      name: "Zupa na ostro ze stekiem z rekina i mlekiem kokosowym",
      number: 4,
      price: [
        { price: "17" }
      ],
      img: "assets/images/dish/zupa_ostro_z_rekina.png"
    },
    {
      description: "serwowane z makaronem sojowym i warzywami 480ml",
      name: "Zupa na ostro z krewetkami i stekiem z rekina",
      number: 5,
      price: [
        { price: "21" }
      ],
      img: "assets/images/dish/zupa_ostro_krewetki_rekin.png"
    }]
  },
  {
    category: "Przekąski",
    id_class: "przekaski",
    img: "assets/images/bg/krewetki_w_ciescie.jpg",
    dish: [{
      description: "(5szt. mini naleśników, ryż, surówka, sos)",
      name: "Spring rolls ",
      number: 1,
      price: [
        { price: "12" }
      ],
      img: "assets/images/dish/spring_roll_5szt.png"
    },
    {
      description: "(10szt. z sosem)",
      name: "Spring rolls ",
      number: 2,
      price: [
        { price: "10" }
      ],
      img: "assets/images/dish/spring_roll_10szt..png"
    },
    {
      description: "satay 2szt. (z ryże i surówką, orzechy)",
      name: "Kurczak na patyku satay",
      number: 3,
      price: [
        { price: "14" }
      ],
      img: "assets/images/dish/satay.png"
    },
    {
      description: "z sosem i surówką 6szt.",
      name: "Krewetki w cieście",
      number: 4,
      price: [
        { price: "17" }
      ],
      img: "assets/images/dish/krewetki_w_ciescie.png"
    },
    {
      description: "",
      name: "Chipsy krewetkowe",
      number: 5,
      price: [
        { price: "5" }
      ],
      img: "assets/images/dish/chipsy_krewetkowe.png"
    }]
  },
  {
    category: "Sałatki",
    id_class: "salatki",
    img: "assets/images/bg/w_ciescie.jpg",
    dish: [{
      description: "cebula, papryka, marchewka, kiełki, orzechy, olej sezamowy, sos",
      name: "Mix sałat",
      number: 1,
      price: [
        { price: "13" }
      ],
      img: "assets/images/dish/mix_salat_1.png"
    },
    {
      description: "cebula, papryka, marchewka, kiełki, olej sezamowy, sos kolendrowy",
      name: "Mix sałat",
      number: 2,
      price: [
        { price: "13" }
      ],
      img: "assets/images/dish/mix_salat_2.png"
    },
    {
      description: "Kurczak w sosie słodkim chili z sezamem lub orzechami",
      name: "Dodatek sałatki",
      number: 3,
      price: [
        { price: "10" }
      ],
      img: "assets/images/dish/mix_salat_3.png"
    },
    {
      description: "",
      name: "Surówka z białej kapusty z orzechami",
      number: 4,
      price: [
        { price: "6" }
      ],
      img: "assets/images/dish/surowka_4.png"
    }]
  },
  {
    category: "Zestaw Dziecięcy",
    id_class: "zestaw_dzieciecy",
    img: "assets/images/bg/czarny_pieprz.jpg",
    dish: [{
      description: "frytki lub ryż",
      name: "Kurczak lub wieprzowina panierowana w tempurze",
      number: 1,
      price: [
        { price: "17" }
      ],
      img: "assets/images/dish/dzieciecy_kurczak_1.png"
    },
    {
      description: "z sosem",
      name: "Kubełek kurczaka w tempurze",
      number: 2,
      price: [
        { price: "18" }
      ],
      img: "assets/images/dish/dzieciecy_kubelek_2.png"
    },
    {
      description: "z ryżem (do uzgodnienia z kucharzem)",
      name: "Warzywa z kurczakiem",
      number: 3,
      price: [
        { price: "15" }
      ],
      img: "assets/images/dish/dzieciecy_warzywa_3.png"
    }]
  },
  {
    category: "Tajskie Carry",
    id_class: "curry",
    img: "assets/images/bg/5_smakow.jpg",
    dish: [{
      description: "z cebulą i papryką - (żółte, czerwone lub zielone) serwowane z ryżem i chipsami krewetkowymi lub makaronemdo wyboru: kurczak, wieprzowina, mix",
      name: "Curry",
      number: 1,
      price: [
        { size: "L", price: "18" },
        { size: "XL", price: "24" }
      ],
      img: "assets/images/dish/curry_1.png"
    },
    {
      description: "z ananasem, bambusem, cebulą - (żółte, czerwone lub zielone) serwowane z ryżem i chipsami krewetkowymi lub makaronemdo wyboru: kurczak, wieprzowina, mix",
      name: "Curry",
      number: 2,
      price: [
        { size: "L", price: "18" },
        { size: "XL", price: "24" }
      ],
      img: "assets/images/dish/curry_2.png"
    },
    {
      description: "z cebulą, papryką i groszkiem zielonym - (żółte, czerwone lub zielone) serwowane z ryżem i chipsami krewetkowymi lub makaronemdo wyboru: kurczak, wieprzowina, mix",
      name: "Curry",
      number: 3,
      price: [
        { size: "L", price: "18" },
        { size: "XL", price: "24" }
      ],
      img: "assets/images/dish/curry_3.png"
    },
    {
      description: "z papryką, cebulą i kapustą pekińską - (żółte, czerwone lub zielone) serwowane z ryżem i chipsami krewetkowymi lub makaronemdo wyboru: kurczak, wieprzowina, mix",
      name: "Curry",
      number: 4,
      price: [
        { size: "L", price: "18" },
        { size: "XL", price: "24" }
      ],
      img: "assets/images/dish/curry_4.png"
    },
    {
      description: "z warzywami mix - (żółte, czerwone lub zielone) serwowane z ryżem i chipsami krewetkowymi lub makaronemdo wyboru: kurczak, wieprzowina, mix",
      name: "Curry",
      number: 5,
      price: [
        { size: "L", price: "18" },
        { size: "XL", price: "24" }
      ],
      img: "assets/images/dish/curry_5.png"
    }]
  },
  {
    category: "Ciepłe Dania",
    id_class: "cieple_dania",
    img: "assets/images/bg/5_smakow.jpg",
    dish: [{
      description: "Danie z ryżem i surówką lub makaronem, do wyboru - kurczak, wieprzowina, mix (lub w wersji wegeteriańskiej dodatkowe opcje warzyw",
      name: "W sosie Yakiniku z cebulą i marchewką, sezam",
      number: 1,
      price: [
        { size: "L", price: "21" },
        { size: "XL", price: "26" }
      ],
      img: "assets/images/dish/curry_1.png"
    },
    {
      description: "Danie z ryżem i surówką lub makaronem, do wyboru - kurczak, wieprzowina, mix (lub w wersji wegeteriańskiej dodatkowe opcje warzyw",
      name: "W sosie Yakiniku z cebulą i papryką, sezam",
      number: 2,
      price: [
        { size: "L", price: "21" },
        { size: "XL", price: "26" }
      ],
      img: "assets/images/dish/curry_1.png"
    },
    {
      description: "Danie z ryżem i surówką lub makaronem, do wyboru - kurczak, wieprzowina, mix (lub w wersji wegeteriańskiej dodatkowe opcje warzyw",
      name: "W sosie czarnego pieprzu z cebulą i marchewką",
      number: 3,
      price: [
        { size: "L", price: "22" },
        { size: "XL", price: "27" }
      ],
      img: "assets/images/dish/curry_1.png"
    },
    {
      description: "Danie z ryżem i surówką lub makaronem, do wyboru - kurczak, wieprzowina, mix (lub w wersji wegeteriańskiej dodatkowe opcje warzyw",
      name: "W sosie czarnego pieprzu z cebulą i papryką",
      number: 4,
      price: [
        { size: "L", price: "22" },
        { size: "XL", price: "27" }
      ],
      img: "assets/images/dish/curry_1.png"
    },
    {
      description: "Danie z ryżem i surówką lub makaronem, do wyboru - kurczak, wieprzowina, mix (lub w wersji wegeteriańskiej dodatkowe opcje warzyw",
      name: "5 smaków, mix warzyw, imbir, mini kolby kukurydzy, grzyby mun",
      number: 5,
      price: [
        { size: "L", price: "19" },
        { size: "XL", price: "24" }
      ],
      img: "assets/images/dish/curry_1.png"
    },
    {
      description: "Danie z ryżem i surówką lub makaronem, do wyboru - kurczak, wieprzowina, mix (lub w wersji wegeteriańskiej dodatkowe opcje warzyw",
      name: "Rozmaitości, mix warzyw, mini kolby kukurydzy, grzyby mun",
      number: 6,
      price: [
        { size: "L", price: "19" },
        { size: "XL", price: "24" }
      ],
      img: "assets/images/dish/curry_1.png"
    },
    {
      description: "Danie z ryżem i surówką lub makaronem, do wyboru - kurczak, wieprzowina, mix (lub w wersji wegeteriańskiej dodatkowe opcje warzyw",
      name: "Na słodko z sosem śliwkowym, cebula, marchew, grzyby mun",
      number: 7,
      price: [
        { size: "L", price: "19" },
        { size: "XL", price: "24" }
      ],
      img: "assets/images/dish/curry_1.png"
    },
    {
      description: "Danie z ryżem i surówką lub makaronem, do wyboru - kurczak, wieprzowina, mix (lub w wersji wegeteriańskiej dodatkowe opcje warzyw",
      name: "Satay orzechowy, cebuka, papryka, kiełki mung",
      number: 8,
      price: [
        { size: "L", price: "21" },
        { size: "XL", price: "26" }
      ],
      img: "assets/images/dish/curry_1.png"
    },
    {
      description: "Danie z ryżem i surówką lub makaronem, do wyboru - kurczak, wieprzowina, mix (lub w wersji wegeteriańskiej dodatkowe opcje warzyw",
      name: "w sosie słodko-pikantnym, mix warzyw, grzyby mun, bambus, orzech",
      number: 9,
      price: [
        { size: "L", price: "20" },
        { size: "XL", price: "25" }
      ],
      img: "assets/images/dish/curry_1.png"
    },
    {
      description: "Danie z ryżem i surówką lub makaronem, do wyboru - kurczak, wieprzowina, mix (lub w wersji wegeteriańskiej dodatkowe opcje warzyw",
      name: "w sosie słodko-kwaśnym, imbir, ananas, bambus, orzech",
      number: 10,
      price: [
        { size: "L", price: "20" },
        { size: "XL", price: "25" }
      ],
      img: "assets/images/dish/curry_1.png"
    },
    {
      description: "Danie z ryżem i surówką lub makaronem, do wyboru - kurczak, wieprzowina, mix (lub w wersji wegeteriańskiej dodatkowe opcje warzyw",
      name: "w sosie Hoisin z cebulą, marchewką, kapustą pekińską, bambus, orzech",
      number: 11,
      price: [
        { size: "L", price: "19" },
        { size: "XL", price: "24" }
      ],
      img: "assets/images/dish/curry_1.png"
    },
    {
      description: "Danie z ryżem i surówką lub makaronem, do wyboru - kurczak, wieprzowina, mix (lub w wersji wegeteriańskiej dodatkowe opcje warzyw",
      name: "w sosie imbirowym, cebula, papryka, kapusta pekińska, imbir",
      number: 12,
      price: [
        { size: "L", price: "19" },
        { size: "XL", price: "24" }
      ],
      img: "assets/images/dish/curry_1.png"
    },
    {
      description: "Danie z ryżem i surówką lub makaronem, do wyboru - kurczak, wieprzowina, mix (lub w wersji wegeteriańskiej dodatkowe opcje warzyw",
      name: "w sosie cytrynowym, cebula, ser naciowy, kap. pekińska, bambus, marchewka",
      number: 13,
      price: [
        { size: "L", price: "20" },
        { size: "XL", price: "24" }
      ],
      img: "assets/images/dish/curry_1.png"
    },
    {
      description: "Danie z ryżem i surówką lub makaronem, do wyboru - kurczak, wieprzowina, mix (lub w wersji wegeteriańskiej dodatkowe opcje warzyw",
      name: "Bazyliowe chili z cebulą, papryką, kapustą pekińską, fasolka",
      number: 14,
      price: [
        { size: "L", price: "21" },
        { size: "XL", price: "25" }
      ],
      img: "assets/images/dish/curry_1.png"
    },
    {
      description: "Danie z ryżem i surówką lub makaronem, do wyboru - kurczak, wieprzowina, mix (lub w wersji wegeteriańskiej dodatkowe opcje warzyw",
      name: "W cieście, papryka, marchew, pekińska, orzechy, ananas, sos słodko-pikantny",
      number: 15,
      price: [
        { size: "L", price: "22" },
        { size: "XL", price: "27" }
      ],
      img: "assets/images/dish/curry_1.png"
    },
    {
      description: "Danie z ryżem i surówką lub makaronem, do wyboru - kurczak, wieprzowina, mix (lub w wersji wegeteriańskiej dodatkowe opcje warzyw",
      name: "Ryż zasmażany z jajkiem i sosem sojowym, groszek zielony, cebula, orzzechy",
      number: 16,
      price: [
        { size: "L", price: "16" },
        { size: "XL", price: "21" }
      ],
      img: "assets/images/dish/curry_1.png"
    },
    {
      description: "Danie z ryżem i surówką lub makaronem, do wyboru - kurczak, wieprzowina, mix (lub w wersji wegeteriańskiej dodatkowe opcje warzyw",
      name: "Brokuły z cebulą i czosnkiem, słodkim sosem chilli i sezamem",
      number: 17,
      price: [
        { size: "L", price: "19" },
        { size: "XL", price: "25" }
      ],
      img: "assets/images/dish/curry_1.png"
    },
    {
      description: "Danie z ryżem i surówką lub makaronem, do wyboru - kurczak, wieprzowina, mix (lub w wersji wegeteriańskiej dodatkowe opcje warzyw",
      name: "Brokuły z mini kolbami kukurydzy łagodne lub pikantne",
      number: 18,
      price: [
        { size: "L", price: "19" },
        { size: "XL", price: "24" }
      ],
      img: "assets/images/dish/curry_1.png"
    },
    {
      description: "Danie z ryżem i surówką lub makaronem, do wyboru - kurczak, wieprzowina, mix (lub w wersji wegeteriańskiej dodatkowe opcje warzyw",
      name: "Ryż z warzywami mix w sosie ostrygowym",
      number: 19,
      price: [
        { size: "L", price: "19" },
        { size: "XL", price: "23" }
      ],
      img: "assets/images/dish/curry_1.png"
    },
    {
      description: "Danie z ryżem i surówką lub makaronem, do wyboru - kurczak, wieprzowina, mix (lub w wersji wegeteriańskiej dodatkowe opcje warzyw",
      name: "Stir fry na słono mix warzyw lubczyk, grzyby mun",
      number: 20,
      price: [
        { size: "L", price: "22" },
        { size: "XL", price: "26" }
      ],
      img: "assets/images/dish/curry_1.png"
    },
    {
      description: "Danie z ryżem i surówką lub makaronem, do wyboru - kurczak, wieprzowina, mix (lub w wersji wegeteriańskiej dodatkowe opcje warzyw",
      name: "Teriyaki słodki z mix warzyw i imbirem, orzechy",
      number: 21,
      price: [
        { size: "L", price: "22" },
        { size: "XL", price: "26" }
      ],
      img: "assets/images/dish/curry_1.png"
    },
    {
      description: "Danie z ryżem i surówką lub makaronem, do wyboru - kurczak, wieprzowina, mix (lub w wersji wegeteriańskiej dodatkowe opcje warzyw",
      name: "Kebab mix mięsa z warzywami, frytki lub ryż i surówka",
      number: 22,
      price: [
        { size: "L", price: "18" },
        { size: "XL", price: "22" }
      ],
      img: "assets/images/dish/curry_1.png"
    },
    {
      description: "Danie z ryżem i surówką lub makaronem, do wyboru - kurczak, wieprzowina, mix (lub w wersji wegeteriańskiej dodatkowe opcje warzyw",
      name: "Danie klienta ustalane z kucharzem- cena zależna od ustaleń z szefem kuchni",
      number: 23,
      price: [
        { size: "", price: "" },
        { size: "", price: "" }
      ],
      img: "assets/images/dish/curry_1.png"
    }]
  }, {
    category: "Dania z Makaronem ryżowym",
    id_class: "d_z_m_r",
    img: "assets/images/bg/5_smakow.jpg",
    dish: [{
      description: "",
      name: "Pad Thai z kurczakiem, cebulą, kiełkami mun, czosnek, grzyby mun, sos rybny",
      number: 1,
      price: [
        { size: "L", price: "21" },
        { size: "XL", price: "26" }
      ],
      img: "assets/images/dish/curry_1.png"
    },
    {
      description: "",
      name: "Pad Thai z krewetkami, cebulą, kiełkami mun, czosnek, grzyby mun, sos rybny",
      number: 2,
      price: [
        { size: "L", price: "26" },
        { size: "XL", price: "31" }
      ],
      img: "assets/images/dish/curry_1.png"
    },
    {
      description: "",
      name: "Pad Thai wegeteriański, sos wybny",
      number: 3,
      price: [
        { size: "L", price: "19" },
        { size: "XL", price: "24" }
      ],
      img: "assets/images/dish/curry_1.png"
    }
    ]
  }
  , {
    category: "Dodatki",
    id_class: "dodatki",
    img: "assets/images/bg/5_smakow.jpg",
    dish: [{
      description: "",
      name: "Dodatek warzyw (kap. pekińska, marchew, papryka, kiełki mung, cebula, mini kolby kukurydzy",
      number: 1,
      price: [
        { size: "L", price: "21" },
        { size: "XL", price: "26" }
      ],
      img: "assets/images/dish/curry_1.png"
    }]
  }
  ]

  constructor() {
  }
  // public loadScript(url: string) {
  //   const body = <HTMLDivElement>document.body;
  //   const script = document.createElement('script');
  //   script.innerHTML = '';
  //   script.src = url;
  //   script.async = false;
  //   script.defer = true;
  //   body.appendChild(script);
  // }
  ngOnInit() {
    // this.loadScript('assets/js/active.js');
  }
  scrollToElement($element): void {
    document.getElementById($element).scrollIntoView({behavior: 'smooth'});
  }
 

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
   document.querySelector('#' + section)
    .scrollIntoView({behavior: "smooth"});
    this.currentSection = section;
  }

}
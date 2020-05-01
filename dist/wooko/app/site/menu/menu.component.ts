import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuDishComponent implements OnInit {



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
          { size: "L", price: "10"},
          { size: "XL", price: "26"}
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
                          { price: "10"}
                         ], 
                        img: "assets/images/dish/zupa_rosol_z_kurczakiem.png" 
                      },
                      {
                        description: "serwowane z makaronem sojowym i warzywami 480ml", 
                        name: "Zupa na ostro z kurczakiem i mlekiem kokosowym", 
                        number: 2,
                        price:  [
                          { price: "10"}
                         ], 
                        img: "assets/images/dish/zupa_ostro_z_kurczakiem_m_k.png" 
                      },
                      {
                        description: "serwowane z makaronem sojowym i warzywami 480ml", 
                        name: "Zupa na ostro z krewetkami 3szt. i mlekiem kokosowym", 
                        number: 3,
                        price:  [
                          { price: "10"}
                         ], 
                        img: "assets/images/dish/zupa_ostro_z_krewetkami_m_k.png" 
                      },
                      {
                        description: "serwowane z makaronem sojowym i warzywami 480ml", 
                        name: "Zupa na ostro ze stekiem z rekina i mlekiem kokosowym", 
                        number: 4,
                        price: [
                          { price: "10"}
                         ], 
                        img: "assets/images/dish/zupa_ostro_z_rekina.png" 
                      },
                      {
                        description: "serwowane z makaronem sojowym i warzywami 480ml", 
                        name: "Zupa na ostro z krewetkami i stekiem z rekina", 
                        number: 5,
                        price:  [
                          { price: "10"}
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
                      price:  [
                        { price: "10"}
                       ], 
                      img: "assets/images/dish/spring_roll_5szt.png" 
                    },
                    {
                      description: "(10szt. z sosem)", 
                      name: "Spring rolls ", 
                      number: 2,
                      price:  [
                        { price: "10"}
                       ], 
                      img: "assets/images/dish/spring_roll_10szt..png" 
                    },
                    {
                      description: "satay 2szt. (z ryże i surówką, orzechy)", 
                      name: "Kurczak na patyku satay", 
                      number: 3,
                      price:  [
                        { price: "10"}
                       ], 
                      img: "assets/images/dish/satay.png" 
                    },
                    {
                      description: "z sosem i surówką 6szt.", 
                      name: "Krewetki w cieście", 
                      number: 4,
                      price:  [
                        { price: "10"}
                       ], 
                      img: "assets/images/dish/krewetki_w_ciescie.png" 
                    },
                    {
                      description: "", 
                      name: "Chipsy krewetkowe", 
                      number: 5,
                      price:  [
                        { price: "10"}
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
                    price:  [
                      { price: "10"}
                     ], 
                    img: "assets/images/dish/mix_salat_1.png" 
                  },
                  {
                    description: "cebula, papryka, marchewka, kiełki, olej sezamowy, sos kolendrowy", 
                    name: "Mix sałat", 
                    number: 2,
                    price:  [
                      { price: "10"}
                     ], 
                    img: "assets/images/dish/mix_salat_2.png" 
                  },
                  {
                    description: "Kurczak w sosie słodkim chili z sezamem lub orzechami", 
                    name: "Dodatek sałatki", 
                    number: 3,
                    price:  [
                      { price: "10"}
                     ], 
                    img: "assets/images/dish/mix_salat_3.png" 
                  },
                  {
                    description: "", 
                    name: "Surówka z białej kapusty z orzechami", 
                    number: 4,
                    price:  [
                      { price: "10"}
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
                            {price: "17"}
                           ], 
                    img: "assets/images/dish/dzieciecy_kurczak_1.png" 
                  },
                  {
                    description: "z sosem", 
                    name: "Kubełek kurczaka w tempurze", 
                    number: 2,
                    price: [
                            {price: "18"}
                           ], 
                    img: "assets/images/dish/dzieciecy_kubelek_2.png" 
                  },
                  {
                    description: "z ryżem (do uzgodnienia z kucharzem)", 
                    name: "Warzywa z kurczakiem", 
                    number: 3,
                    price: [
                            {price: "15"}
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
                            {size: "L", price: "18"},
                            {size: "XL", price: "24"}
                           ], 
                    img: "assets/images/dish/curry_1.png" 
                  },
                  {
                    description: "z ananasem, bambusem, cebulą - (żółte, czerwone lub zielone) serwowane z ryżem i chipsami krewetkowymi lub makaronemdo wyboru: kurczak, wieprzowina, mix", 
                    name: "Curry",
                    number: 2, 
                    price: [
                      {size: "L", price: "18"},
                      {size: "XL", price: "24"}
                     ], 
                    img: "assets/images/dish/curry_2.png" 
                  },
                  {
                    description: "z cebulą, papryką i groszkiem zielonym - (żółte, czerwone lub zielone) serwowane z ryżem i chipsami krewetkowymi lub makaronemdo wyboru: kurczak, wieprzowina, mix", 
                    name: "Curry",
                    number: 3, 
                    price: [
                      {size: "L", price: "18"},
                      {size: "XL", price: "24"}
                     ], 
                    img: "assets/images/dish/curry_3.png" 
                  },
                  {
                    description: "z papryką, cebulą i kapustą pekińską - (żółte, czerwone lub zielone) serwowane z ryżem i chipsami krewetkowymi lub makaronemdo wyboru: kurczak, wieprzowina, mix", 
                    name: "Curry",
                    number: 4, 
                    price: [
                      {size: "L", price: "18"},
                      {size: "XL", price: "24"}
                     ], 
                    img: "assets/images/dish/curry_4.png" 
                  },
                  {
                    description: "z warzywami mix - (żółte, czerwone lub zielone) serwowane z ryżem i chipsami krewetkowymi lub makaronemdo wyboru: kurczak, wieprzowina, mix", 
                    name: "Curry",
                    number: 5, 
                    price: [
                      {size: "L", price: "18"},
                      {size: "XL", price: "24"}
                     ], 
                    img: "assets/images/dish/curry_5.png" 
                  }]
                }
                ]

  constructor() {
  }

  ngOnInit(): void {
  }


}
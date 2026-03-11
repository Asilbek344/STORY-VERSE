import React from 'react'
import "./About.css"
import M from "./imeges/M.jpg"
import S from "./imeges/S.jpg"
const About = () => {
  return (
    <main>
      <section id='My'>
        <div className="container my-m">
          <div className='tex'>
            <h1>Mening Aybim</h1>
            <p>“Mening aybim” "asl nomi Culpa Mía" — 2023-yilda chiqarilgan ispan romantik drama filmi bo‘lib, u yozuvchi Mercedes Ronning mashhur “Culpables” kitobi asosida suratga olingan. Filmda Noah ismli qiz onasi bilan yangi boy oilaga ko‘chib o‘tadi va u yerda o‘gay akasi Nick bilan tanishadi. Avvaliga ular bir-birini yoqtirmaydi, chunki xarakterlari juda farq qiladi, lekin vaqt o‘tishi bilan ular o‘rtasida kuchli va yashirin sevgi paydo bo‘ladi. Biroq ularning munosabatlari oddiy emas, chunki ular bir oilada yashaydi va Nickning xavfli hayoti hamda Noahning o‘tmishidagi sirlar ularning sevgisini sinovdan o‘tkazadi. Film romantika, drama, ko‘cha poygalari va yoshlar hayotini birlashtirgan bo‘lib, bosh rollarda Nicole Wallace va Gabriel Guevara o‘ynagan.</p>
            <a href="https://uzmovi.tv/tarjima-kinolarri/5934-mening-aybim-premyera.html">
              <button className='btn'>Batafsil</button>
            </a>
          </div>
          <img src={M} alt="" />
        </div>
      </section>
      <section id='Spid'>
        <div className="container spid-m">
          <img src={S} alt="" />
          <div className='tex'>
            <h1>O‘rgimchak Odam: Uyga Yo‘l Yo‘q</h1>

            <p>
              “O‘rgimchak Odam: Uyga Yo‘l Yo‘q” (Spider-Man: No Way Home) — 2021-yilda chiqarilgan mashhur superqahramon filmi bo‘lib, Marvel studiyasi tomonidan yaratilgan. Filmda Piter Parkerning shaxsi butun dunyoga oshkor bo‘lib ketadi va uning hayoti butunlay o‘zgarib ketadi. Shu sababli u Doctor Strange’dan yordam so‘raydi va odamlar uning kimligini unutishi uchun sehr ishlatiladi. Biroq bu sehr noto‘g‘ri ketib, boshqa olamlardan xavfli dushmanlar kelib qoladi. Piter Parker ularni to‘xtatish va o‘z dunyosini saqlab qolish uchun katta kurash olib boradi. Filmda kuchli jang sahnalari, drama va juda ko‘p kutilmagan voqealar mavjud bo‘lib, u Marvel koinotidagi eng mashhur filmlardan biri hisoblanadi.
            </p>
            <a href="https://splay.uz/detail/659">
              <button className='btn' >Batafsil</button>
            </a>
          </div>

        </div>
      </section>
      <section id='Me'>
        <div className="container">
          <div>
            <div className='a-tex'> 
              <p>🎬 **About Our Website**

                This website was created and developed by **Asilbek** in 2026. The entire project was built in just **5 days**, showing strong dedication, creativity, and passion for web development.

                Our goal is to provide users with a modern and enjoyable platform where they can explore many different movies from various genres such as **Fantasy, Action, Romance, Sci-Fi, and more**. The website is designed to be simple, fast, and visually appealing so that users can easily discover new films.

                This project demonstrates **Asilbek’s talent in programming and web design**, proving that with determination and hard work it is possible to create an impressive platform in a short amount of time.

                We are proud of this project and hope it will continue to grow with new features, better design, and even more movies in the future.

                ⭐ Built with passion by **Asilbek**
                🚀 Created in **2026**
                ⏱ Developed in **just 5 days**
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About



import ambrasImg from "./img/ambras.jpg"
import hofImg from "./img/hofgarten.jpg"
import hovburgImg from "./img/hofburg.jpg"
import tempImg from "./img/wether.PNG"
import marketingImg from "./img/skier.png"
import sloganImg from "./img/innsbruck1.png"

function Main () {
    return (<main>
		<div className="slogan" style={{backgroundImage:`url(${sloganImg})`}}>
			<div className="container">
				<h1> Открой для себя Инсбрук </h1>
			</div>
		</div>
		<article className="about container">
				<h2> О городе</h2>
				<section className="about-info">
					<h3> Инсбрук - один из лучших горнолыжных курортов Австрии. </h3>
					<p> Сам город расположился в долине реки Инн, у самого подножия Восточных Альп. Поэтому, почти невозможно найти место в этом городе, чтобы не было видно гор. </p>
				</section>
				<div className="wrapper">
					<section className="about-numbers">
						<h3> Инсбрук в цифрах: </h3>
						<ul className="about-numbers-list">
							<li> Население: чуть более 130 000 человек </li>
							<li> Часовой пояс: UTC+1 зимой и UTC+2 летом </li>
							<li> Зоны для катания: 9 штук, все связаны между собой транспортным сообщением </li>
							<li> Перепад высот: 860 метров — 3100 метров </li>
							<li> Продолжительность сезона: с 12 месяца (декабрь) по 4 месяц (апрель) включительно </li>
							<li> Возраст посетителей всех зон: с 2 лет и старше, без ограничений. </li>
						</ul>
					</section>
					<aside className="marketing" style={{backgroundImage:`url(${marketingImg})`}}>
						<p> собрался на горнолыжный курорт? </p>
						<p> -не забудь купить снаряжение! </p>
						<a href="ski-racer.com"> ski-racer.com </a>
					</aside>
				</div>
				<section className="about-weather">
					<h3> Тепература по месецам </h3>
					<figure className="about-weather-graph">
						<img src={tempImg} />
						<figcaption> Температура воздуха в Инсбруке днем и ночью, °C</figcaption>
					</figure>
				</section>
				<section className="gallery container">
					<h2> Галерея </h2>
					<p> Впрочем, кроме спусков на лыжах, здесь хватает удивитильных мест.</p>
					<ul className="gallery-list">
						<li className="gallery-item">
							<h3> Императорский дворец </h3>
							<img src={hovburgImg} />
						</li>
						<li className="gallery-item">
							<img src={hofImg} />
							<h3> Парк хофгартен </h3>
						</li>
						<li className="gallery-item">
							<h3> Замок Абрам </h3>
							<img src={ambrasImg} />
						</li>
					</ul>
				</section>
				<section className="map container">
					<h2> Инсбрук на карте </h2>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86607.14481706916!2d11.308750143676283!3d47.28555016238508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479d6ecfe1f8ca73%3A0x9d201c7d281d9b0d!2z0JjQvdC90YHQsdGA0YPQuiwg0JDQstGB0YLRgNC40Y8!5e0!3m2!1sru!2sru!4v1623498246290!5m2!1sru!2sru" width="1200" height="450" title="map" loading="lazy"></iframe>
					<p> Благодаря удобному расположению, добраться до сердца Альп не составляет особого труда. </p>
					<table className="transfer">
						<thead>
							<tr>
								<th> Вид транспорта </th>
								<th> Из Москвы </th>
								<th> Из Вены </th>
								<th> Из Мюнхена </th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td> Самолёт </td>
								<td> + </td>
								<td> - </td>
								<td> - </td>
							</tr>
							<tr>
								<td> Поезд </td>
								<td> + </td>
								<td> + </td>
								<td> + </td>
							</tr>
							<tr>
								<td> Автомобиль </td>
								<td> - </td>
								<td> + </td>
								<td> + </td>
							</tr>
							<tr>
								<td> Автобус </td>
								<td> - </td>
								<td> + </td>
								<td> + </td>
							</tr>
							<tr>
								<td> Иные способы </td>
								<td> - </td>
								<td> Трансфер на заказ </td>
								<td> Трансфер на заказ </td>
							</tr>
						</tbody>
					</table>
				</section>
			</article>
	</main>)
}
export default Main
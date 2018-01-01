import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Menu1 = [
	{
		title: 'Cities',
		menu: ['Chennai', 'Mumbai', 'Bengaluru', 'Delhi', 'Goa', 'Pondicherry', 'Punjab', 'Kovai'],
	},
	{
		title: 'Birthday',
		menu: ['Month', 'Year'],
	},
];

const Menu2 = [
	{
		title: 'Wedding',
		menu: ['Bride', 'Bridegroom'],
	},
	{
		title: 'IPL',
		menu: ['CSK', 'RCB', 'MI', 'Delhi', 'KKR'],
	},
	{
		title: 'Health',
		menu: ['Yoga', 'GYM', 'Food'],
	},
];

const Menu3 = [
	{
		title: 'Movies/TV',
		menu: ['Hollywood', 'Bollywood', 'Kollywood', 'Tollywood', 'TV'],
	},
	{
		title: 'Cartoon/Comics',
		menu: ['ShinChan', 'Popeye', 'Dora', 'ScoobyDoo'],
	},
];

const Menu4 = [
	{
		title: 'Companies',
		menu: ['Facebook', 'Google', 'Uber', 'Infosys', 'TCS', 'Accenture', 'More Companies'],
	},
	{
		title: 'Religion',
		menu: ['Hindu', 'Christianity', 'Musliim', 'Buddhist'],
	},
];

const Menu5 = [
	{
		title: 'Language',
		menu: ['Tamil', 'Telugu', 'Kannada', 'Hindi'],
	},
	{
		title: 'Sports/Gaming',
		menu: ['Cricket', 'Football', 'WWE', 'Tennis', 'GTA', 'CandyCrush'],
	},
];

const Menu6 = [
	{
		title: 'Other',
		menu: [
			'Plain T-Shirts',
			'Biking/Racing',
			'Travel',
			'Quotes',
			'Political',
			'Funny',
			'Geeky',
			'Girl Power',
			'Misc',
			'Adult',
		],
	},
];

class HeroMenu extends Component {
	render() {
		return (
			<div className="HeroMenu">
				<div className="container">
					<div>
						{Menu1.map(function(menuItem, idx) {
							return (
								<ul key={idx}>
									<li>{menuItem.title}</li>

									{menuItem.menu.map(function(menu, id) {
										const menuLink = menu.replace(/\s+/g, '-').toLowerCase();

										return (
											<li key={id}>
												<a href={menuLink}>{menu}</a>
											</li>
										);
									})}
								</ul>
							);
						})}
					</div>

					<div>
						{Menu2.map(function(menuItem, idx) {
							return (
								<ul key={idx}>
									<li>{menuItem.title}</li>

									{menuItem.menu.map(function(menu, id) {
										const menuLink = menu.replace(/\s+/g, '-').toLowerCase();

										return (
											<li key={id}>
												<a href={menuLink}>{menu}</a>
											</li>
										);
									})}
								</ul>
							);
						})}
					</div>

					<div>
						{Menu3.map(function(menuItem, idx) {
							return (
								<ul key={idx}>
									<li>{menuItem.title}</li>

									{menuItem.menu.map(function(menu, id) {
										const menuLink = menu.replace(/\s+/g, '-').toLowerCase();

										return (
											<li key={id}>
												<a href={menuLink}>{menu}</a>
											</li>
										);
									})}
								</ul>
							);
						})}
					</div>

					<div>
						{Menu4.map(function(menuItem, idx) {
							return (
								<ul key={idx}>
									<li>{menuItem.title}</li>

									{menuItem.menu.map(function(menu, id) {
										const menuLink = menu.replace(/\s+/g, '-').toLowerCase();

										return (
											<li key={id}>
												<a href={menuLink}>{menu}</a>
											</li>
										);
									})}
								</ul>
							);
						})}
					</div>

					<div>
						{Menu5.map(function(menuItem, idx) {
							return (
								<ul key={idx}>
									<li>{menuItem.title}</li>

									{menuItem.menu.map(function(menu, id) {
										const menuLink = menu.replace(/\s+/g, '-').toLowerCase();

										return (
											<li key={id}>
												<a href={menuLink}>{menu}</a>
											</li>
										);
									})}
								</ul>
							);
						})}
					</div>

					<div>
						{Menu6.map(function(menuItem, idx) {
							return (
								<ul key={idx}>
									{menuItem.menu.map(function(menu, id) {
										const menuLink = menu.replace(/\s+/g, '-').toLowerCase();

										return (
											<li key={id}>
												<a href={menuLink}>{menu}</a>
											</li>
										);
									})}
								</ul>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default HeroMenu;

import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./MenuList";

// dynamically calculate unqiue values here
const uniqueCategories = Array.from(new Set(items.map((item) => item.category)));
const categories = ['all', ...uniqueCategories];

function AppMenu() {
	const [menuItems, setMenuItems] = useState(items);

	const filterItems = (category) => {
		if (category === "all") {
			setMenuItems(items);
		} else {
			setMenuItems(items.filter((item) => item.category === category));
		}
	};

	return (
		<main>
			<section className="menu section">
				<div className="title">
					<h2>our menu</h2>
					<div className="underline"></div>
				</div>
				<Categories categories={categories} filterItems={filterItems} />
				<Menu items={menuItems} />
			</section>
		</main>
	);
}

export default AppMenu;
